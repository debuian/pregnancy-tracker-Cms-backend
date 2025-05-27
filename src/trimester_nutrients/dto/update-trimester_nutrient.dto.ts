import { PartialType } from '@nestjs/mapped-types';
import { CreateTrimesterNutrientDto } from './create-trimester_nutrient.dto';

export class UpdateTrimesterNutrientDto extends PartialType(CreateTrimesterNutrientDto) {}
