import { Inject, Injectable, NotFoundException, Scope } from '@nestjs/common';
import { CreateBabyDevelopmentDto } from './dto/create-baby_development.dto';
import { UpdateBabyDevelopmentDto } from './dto/update-baby_development.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { BabyDevelopmentEntity } from './entities/baby_development.entity';
import { WeeksService } from 'src/weeks/weeks.service';
import { OrganService } from 'src/organ/organ.service';
import { OrganDevelopmentEntity } from './entities/organ_development.entity';
import { BabyMediaEntity } from './entities/baby_media.entity';

@Injectable({ scope: Scope.DEFAULT }) // Use default scope to ensure singleton behavior
export class BabyDevelopmentService {
  constructor(
    @InjectRepository(BabyDevelopmentEntity)
    private readonly babyDevelopmentRepository: Repository<BabyDevelopmentEntity>,
    @InjectRepository(OrganDevelopmentEntity)
    private readonly organDevelopmentRepository: Repository<OrganDevelopmentEntity>,
    @InjectRepository(BabyMediaEntity)
    private readonly babyMediaRepository: Repository<BabyMediaEntity>,
    private readonly weeksService: WeeksService,
    private readonly organService: OrganService,
  ) {}

  async create(
    createBabyDevelopmentDto: CreateBabyDevelopmentDto,
    media: Express.Multer.File[],
  ) {
    const { weekId, organ_developments, ...babyDevelopmentData } =
      createBabyDevelopmentDto;

    const week = await this.weeksService.findOne(weekId);

    const babyDevelopment = this.babyDevelopmentRepository.create({
      ...babyDevelopmentData,
      week,
    });

    const newBabyDevelopment =
      await this.babyDevelopmentRepository.save(babyDevelopment);

    if (organ_developments && organ_developments?.length > 0) {
      const organDevPromises = organ_developments.map(async (od) => {
        const organ = await this.organService.findOne(od.organId);

        const organDevelopment = this.organDevelopmentRepository.create({
          baby_development: newBabyDevelopment,
          organ,
          development_stage: od.development_stage,
        });

        return this.organDevelopmentRepository.save(organDevelopment);
      });

      await Promise.all(organDevPromises);
    }

    if (media?.length) {
      const mediaPromises = media.map(async (file) => {
        const babyMedia = this.babyMediaRepository.create({
          babyDevelopment: newBabyDevelopment,
          mediaUrl: file.path,
          caption: file.originalname,
          mediaType: file.mimetype.split('/')[0], // Fixed typo here
        });
        return this.babyMediaRepository.save(babyMedia);
      });

      await Promise.all(mediaPromises);
    }

    return this.findOne(newBabyDevelopment.id);
  }

  async findAll() {
    const [babyDevelopments, organDevelopments] = await Promise.all([
      this.babyDevelopmentRepository.find({
        relations: ['week'],
      }),
      this.organDevelopmentRepository.find({
        relations: ['organ'],
      }),
    ]);
    return babyDevelopments.map((babyDevelopment) => {
      const matchingOrgans = organDevelopments.filter(
        (od) => od.baby_development.id === babyDevelopment.id,
      );
      return {
        ...babyDevelopment,
        organ_development: matchingOrgans.map((od) => ({
          organ: od.organ,
          development_stage: od.development_stage,
        })),
      };
    });
  }

  // Find all baby developments by id
  async findOne(id: number) {
    const babyDevelopment = await this.babyDevelopmentRepository.findOne({
      where: { id },
    });
    if (!babyDevelopment) {
      throw new NotFoundException(`Baby development with id ${id} not found`);
    }
    const organDevelopments = await this.organDevelopmentRepository.find({
      where: { baby_development: { id } },
      relations: ['organ'],
    });
    const babyMedia = await this.babyMediaRepository.find({
      where: { babyDevelopment: { id } },
    });

    if (!organDevelopments || organDevelopments.length === 0) {
      return {
        ...babyDevelopment,
        organ_development: [],
      };
    }
    if (!babyMedia || babyMedia.length === 0) {
      return {
        ...babyDevelopment,
        organ_development: organDevelopments.map((od) => ({
          organ: od.organ,
          development_stage: od.development_stage,
        })),
        media: [],
      };
    }

    return {
      ...babyDevelopment,
      organ_development: organDevelopments.map((od) => ({
        organ: od.organ,
        development_stage: od.development_stage,
      })),
      media: babyMedia.map((media) => ({
        id: media.id,
        mediaUrl: `http://localhost:8000/${media.mediaUrl}`,
        caption: media.caption,
        mediaType: media.mediaType,
      })),
    };
  }

  // Find baby development by week number
  async findOneByWeek(week: number) {
    const babyDevelopment = await this.babyDevelopmentRepository.findOne({
      where: { week: { weekNumber: week } },
    });
    if (!babyDevelopment) {
      throw new NotFoundException(
        `Baby development for week ${week} not found`,
      );
    }
    const organDevelopments = await this.organDevelopmentRepository.find({
      where: { baby_development: { id: babyDevelopment.id } },
      relations: ['organ'],
    });
    if (!organDevelopments || organDevelopments.length === 0) {
      return {
        ...babyDevelopment,
        organ_development: [],
      };
    }
    return {
      ...babyDevelopment,
      organ_development: organDevelopments.map((od) => ({
        organ: od.organ,
        development_stage: od.development_stage,
      })),
    };
  }

  async update(id: number, updateBabyDevelopmentDto: UpdateBabyDevelopmentDto) {
    const { weekId, organ_developments, ...babyDevelopmentData } =
      updateBabyDevelopmentDto;

    // Get the actual entity from database, not the formatted result from findOne
    const babyDevelopment = await this.findOne(id);

    if (weekId && weekId != babyDevelopment?.week.id) {
      const week = await this.weeksService.findOne(weekId);
      babyDevelopment.week = week;
    }

    if (organ_developments?.length) {
      const existingOrganDevs = await this.organDevelopmentRepository.find({
        where: { baby_development: { id } },
        relations: ['organ'],
      });
      // 1 2 3
      const existingMap = new Map<number, OrganDevelopmentEntity>();
      for (const dev of existingOrganDevs) {
        existingMap.set(dev.organ.id, dev);
      }
      // 1 2 3 4
      const organIdsToKeep = new Set<number>();
      for (const odInput of organ_developments) {
        organIdsToKeep.add(odInput.organId);
        const existing = existingMap.get(odInput.organId);

        if (!existing) {
          const organ = await this.organService.findOne(odInput.organId);
          const newOrganDevs = this.organDevelopmentRepository.create({
            baby_development: babyDevelopment,
            organ,
            development_stage: odInput.development_stage,
          });
          await this.organDevelopmentRepository.save(newOrganDevs);
        } else if (existing.development_stage !== odInput.development_stage) {
          existing.development_stage = odInput.development_stage;

          await this.organDevelopmentRepository.save(existing);
        }
      }

      const toDelete = existingOrganDevs.filter(
        (od) => !organIdsToKeep.has(od.organ.id),
      );

      if (toDelete.length > 0) {
        for (const td of toDelete) {
          await this.organDevelopmentRepository.delete({ id: td.id });
        }
      }
    }

    // Only merge and save if there are actual changes to babyDevelopmentData
    this.babyDevelopmentRepository.merge(babyDevelopment, babyDevelopmentData);
    await this.babyDevelopmentRepository.save(babyDevelopment);

    return this.findOne(id);
  }

  async remove(id: number) {
    return this.babyDevelopmentRepository.delete({ id });
  }
}
