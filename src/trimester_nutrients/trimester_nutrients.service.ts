import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTrimesterNutrientDto } from './dto/create-trimester_nutrient.dto';
import { UpdateTrimesterNutrientDto } from './dto/update-trimester_nutrient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TrimesterNutrientEntity } from './entities/trimester_nutrient.entity';
import { Repository } from 'typeorm';
import { TrimestersService } from 'src/trimesters/trimesters.service';
import { NutrientsService } from 'src/nutrients/nutrients.service';

@Injectable()
export class TrimesterNutrientsService {
  constructor(
    @InjectRepository(TrimesterNutrientEntity)
    private readonly trimesterNutrientRepository: Repository<TrimesterNutrientEntity>,
    private readonly trimesterService: TrimestersService,
    private readonly nutrientService: NutrientsService,
  ) {}
  async create(createTrimesterNutrientDto: CreateTrimesterNutrientDto) {
    const trimester = await this.trimesterService.findOne(
      createTrimesterNutrientDto.trimesterId,
    );
    const nutrient = await this.nutrientService.findOne(
      createTrimesterNutrientDto.nutrientId,
    );
    const trimesterNutrient = this.trimesterNutrientRepository.create({
      trimester,
      nutrient,
      recommendation: createTrimesterNutrientDto.recommendation,
      daily_amount: createTrimesterNutrientDto.daily_amount,
    });
    return this.trimesterNutrientRepository.save(trimesterNutrient);
  }

  async findAll() {
    return this.trimesterNutrientRepository.find({
      relations: ['trimester', 'nutrient'],
    });
  }

  async findOne(id: number) {
    const tn = await this.trimesterNutrientRepository.findOne({
      where: { id },
      relations: ['trimester', 'nutrient'],
    });
    if (!tn) {
      throw new NotFoundException(`Trimester Nutrient with id ${id} not found`);
    }
    return tn;
  }

  async update(
    id: number,
    updateTrimesterNutrientDto: UpdateTrimesterNutrientDto,
  ) {
    const tn = await this.findOne(id);
    if (
      updateTrimesterNutrientDto.trimesterId &&
      tn.trimester.id !== updateTrimesterNutrientDto.trimesterId
    ) {
      const trimester = await this.trimesterService.findOne(
        updateTrimesterNutrientDto.trimesterId,
      );
      tn.trimester = trimester;
    }
    if (
      updateTrimesterNutrientDto.nutrientId &&
      tn.nutrient.id !== updateTrimesterNutrientDto.nutrientId
    ) {
      const nutrient = await this.nutrientService.findOne(
        updateTrimesterNutrientDto.nutrientId,
      );
      tn.nutrient = nutrient;
    }
    const updatedTn = this.trimesterNutrientRepository.merge(
      tn,
      updateTrimesterNutrientDto,
    );
    return this.trimesterNutrientRepository.save(updatedTn);
  }

  async remove(id: number) {
    const tn = await this.findOne(id);
    return this.trimesterNutrientRepository.remove(tn);
  }
}
