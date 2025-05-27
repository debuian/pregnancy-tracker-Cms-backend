import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMotherDevelopmentDto } from './dto/create-mother_development.dto';
import { UpdateMotherDevelopmentDto } from './dto/update-mother_development.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MotherDevelopmentEntity } from './entities/mother_development.entity';
import { Repository } from 'typeorm';
import { WeeksService } from 'src/weeks/weeks.service';
import { SymptomsService } from 'src/symptoms/symptoms.service';
import { MotherSymptomsEntity } from './entities/mother_symptoms.entity';
import { MotherMediaEntity } from './entities/mother_media.entity';

@Injectable()
export class MotherDevelopmentService {
  constructor(
    @InjectRepository(MotherDevelopmentEntity)
    private readonly motherDevelopmentRepo: Repository<MotherDevelopmentEntity>,
    @InjectRepository(MotherSymptomsEntity)
    private readonly motherSymptomsRepo: Repository<MotherSymptomsEntity>,
    @InjectRepository(MotherMediaEntity)
    private readonly motherMediaRepo: Repository<MotherMediaEntity>,
    private readonly symptomsService: SymptomsService,
    private readonly weeksService: WeeksService,
  ) {}

  async create(
    createMotherDevelopmentDto: CreateMotherDevelopmentDto,
    files?: Express.Multer.File[],
  ) {
    const { weekId, symptoms, ...dtoWithoutWeekId } =
      createMotherDevelopmentDto;
    const week = await this.weeksService.findOne(weekId);
    const motherDevelopment = this.motherDevelopmentRepo.create({
      ...dtoWithoutWeekId,
      week,
    });
    const newMotherDevelopment =
      await this.motherDevelopmentRepo.save(motherDevelopment);

    await Promise.all(
      symptoms.map(async (symptom) => {
        const SymptomEntity = await this.symptomsService.findOne(
          symptom.symptomId,
        );
        const motherSymptom = this.motherSymptomsRepo.create({
          motherDevelopment: newMotherDevelopment,
          symptom: SymptomEntity,
          severity: symptom.severity,
        });
        return this.motherSymptomsRepo.save(motherSymptom);
      }),
    );

    if (files && files.length > 0) {
      await Promise.all(
        files.map(async (file) => {
          const motherMedia = this.motherMediaRepo.create({
            motherDevelopment: newMotherDevelopment,
            mediaUrl: file.path,
            caption: file.originalname,
            mediaType: file.mimetype.split('/')[0],
          });
          return this.motherMediaRepo.save(motherMedia);
        }),
      );
    }
    return this.findOne(newMotherDevelopment.id);
  }

  async findAll() {
    return this.motherDevelopmentRepo.find({
      relations: ['week'],
    });
  }

  async findOne(id: number) {
    const motherDevelopment = await this.motherDevelopmentRepo.findOne({
      where: { id },
      relations: ['week'],
    });
    if (!motherDevelopment) {
      throw new NotFoundException(`MotherDevelopment with id ${id} not found`);
    }
    const motherSymptoms = await this.motherSymptomsRepo.find({
      where: { motherDevelopment: { id } },
      relations: ['symptom'],
    });
    return {
      ...motherDevelopment,
      symptoms: motherSymptoms,
    };
  }

  async update(
    id: number,
    updateMotherDevelopmentDto: UpdateMotherDevelopmentDto,
  ) {
    const { weekId, symptoms, ...dtoWithoutWeekId } =
      updateMotherDevelopmentDto;
    const motherDevelopment = await this.findOne(id);
    if (weekId && motherDevelopment.week.id !== weekId) {
      const week = await this.weeksService.findOne(weekId);
      motherDevelopment.week = week;
    }

    // Handle symptoms Updates and create
    if (symptoms?.length) {
      const existingSymptoms = motherDevelopment.symptoms || [];
      const existingMap = new Map<number, MotherSymptomsEntity>();
      existingSymptoms.forEach((symptom) => {
        existingMap.set(symptom.symptom.id, symptom);
      });

      for (const symptom of symptoms) {
        const { symptomId, ...updatedData } = symptom; // Destructure to avoid unused variable warning
        const existing = existingMap.get(symptomId);
        if (!existing) {
          //Create
          const SymptomEntity = await this.symptomsService.findOne(
            symptom.symptomId,
          );
          const motherSymptom = this.motherSymptomsRepo.create({
            motherDevelopment,
            symptom: SymptomEntity,
            severity: symptom.severity,
          });
          await this.motherSymptomsRepo.save(motherSymptom);
        } else {
          if (existing.severity !== symptom.severity) {
            const updatedSymptom = this.motherSymptomsRepo.merge(
              existing,
              updatedData,
            );
            await this.motherSymptomsRepo.save(updatedSymptom);
          }
          existingMap.delete(symptomId);
        }
      }
      if (existingMap.size > 0) {
        await this.motherSymptomsRepo.remove([...existingMap.values()]);
      }
    }
    const updatedMotherDevelopment = this.motherDevelopmentRepo.merge(
      motherDevelopment,
      dtoWithoutWeekId,
    );
    await this.motherDevelopmentRepo.save(updatedMotherDevelopment);
    return this.findOne(updatedMotherDevelopment.id);
  }

  async remove(id: number) {
    const motherDevelopment = await this.findOne(id);
    await this.motherDevelopmentRepo.remove(motherDevelopment);
  }
}
