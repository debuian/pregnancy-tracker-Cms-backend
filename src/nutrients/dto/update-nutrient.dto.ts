import { PartialType } from '@nestjs/mapped-types';
import { CreateNutrientDto } from './create-nutrient.dto';
import { ApiProperty } from '@nestjs/swagger';
import { NutrientExamples } from './swagger-response';

export class UpdateNutrientDto extends PartialType(CreateNutrientDto) {
  @ApiProperty({
    example: NutrientExamples.UPDATE.name,
    description: 'Name of the nutrient',
    required: false,
  })
  name?: string;

  @ApiProperty({
    example: NutrientExamples.UPDATE.description,
    description: 'Description of the nutrient',
    required: false,
  })
  description?: string;

  @ApiProperty({
    example: NutrientExamples.UPDATE.food_source,
    description: 'Food source of the nutrient',
    required: false,
  })
  food_source?: string;

  @ApiProperty({
    example: NutrientExamples.UPDATE.category,
    description: 'Category of the nutrient',
    required: false,
  })
  category?: string;
}
