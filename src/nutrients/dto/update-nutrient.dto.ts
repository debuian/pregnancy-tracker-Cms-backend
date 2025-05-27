import { PartialType } from '@nestjs/mapped-types';
import { CreateNutrientDto } from './create-nutrient.dto';
import { ApiProduces, ApiProperty } from '@nestjs/swagger';

export class UpdateNutrientDto extends PartialType(CreateNutrientDto) {
  @ApiProperty({
    example: 'Updated Nutrient Name',
    description: 'Name of the nutrient',
    type: String,
    required: false,
  })
  name?: string | undefined;
  @ApiProperty({
    example: 'Updated description of the nutrient.',
    description: 'Description of the nutrient',
    type: String,
    required: false,
  })
  description?: string | undefined;
  @ApiProperty({
    example: 'Updated food source of the nutrient.',
    description: 'Food source of the nutrient',
    type: String,
    required: false,
  })
  food_source?: string | undefined;

  @ApiProperty({
    example: 'Updated category of the nutrient.',
    description: 'Category of the nutrient',
    type: String,
    required: false,
  })
  category?: string | undefined;
}
