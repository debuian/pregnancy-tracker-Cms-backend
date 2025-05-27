import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSymptomDto } from './dto/create-symptom.dto';
import { UpdateSymptomDto } from './dto/update-symptom.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SymptomEntity } from './entities/symptom.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SymptomsService {
  constructor(
    @InjectRepository(SymptomEntity)
    private readonly symptomRepo: Repository<SymptomEntity>,
  ) {}

  async create(createSymptomDto: CreateSymptomDto) {
    const symptom = this.symptomRepo.create(createSymptomDto);
    return this.symptomRepo.save(symptom);
  }

  async findAll() {
    return this.symptomRepo.find();
  }

  async findOne(id: number) {
    const symptom = await this.symptomRepo.findOne({
      where: { id },
    });
    if (!symptom) {
      throw new NotFoundException(`Symptom with id ${id} not found`);
    }
    return symptom;
  }

  async update(id: number, updateSymptomDto: UpdateSymptomDto) {
    const symptom = await this.findOne(id);

    const updatedSymptom = this.symptomRepo.merge(symptom, updateSymptomDto);
    return this.symptomRepo.save(updatedSymptom);
  }

  async remove(id: number) {
    const symptom = await this.findOne(id);
    return this.symptomRepo.remove(symptom);
  }
}
