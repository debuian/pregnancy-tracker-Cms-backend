import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNutrientDto } from './dto/create-nutrient.dto';
import { UpdateNutrientDto } from './dto/update-nutrient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { NutrientEntity } from './entities/nutrient.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NutrientsService {
  constructor(
    @InjectRepository(NutrientEntity)
    private readonly nutrientRepository: Repository<NutrientEntity>,
  ) {}
  async create(createNutrientDto: CreateNutrientDto) {
    const nutrient = this.nutrientRepository.create(createNutrientDto);
    return this.nutrientRepository.save(nutrient);
  }

  async findAll() {
    return this.nutrientRepository.find();
  }

  async findOne(id: number) {
    const nutrient = await this.nutrientRepository.findOneBy({ id });
    if (!nutrient) {
      throw new NotFoundException(`Nutrient with id ${id} not found`);
    }
    return nutrient;
  }

  async update(id: number, updateNutrientDto: UpdateNutrientDto) {
    const nutrient = await this.findOne(id);
    const updatedNutrient = this.nutrientRepository.merge(
      nutrient,
      updateNutrientDto,
    );
    return this.nutrientRepository.save(updatedNutrient);
  }

  async remove(id: number) {
    const nutrient = await this.findOne(id);
    return this.nutrientRepository.remove(nutrient);
  }
}
