import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { NutrientExamples } from './swagger-response';

export class CreateNutrientDto {
  @ApiProperty({
    example: NutrientExamples.CREATE.name,
    description: 'Name of the nutrient',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: NutrientExamples.CREATE.description,
    description: 'Description of the nutrient',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: NutrientExamples.CREATE.food_source,
    description: 'Chemical formula of the nutrient',
  })
  @IsString()
  @IsNotEmpty()
  food_source: string;

  @ApiProperty({
    example: NutrientExamples.CREATE.category,
    description: 'Category of the nutrient',
  })
  @IsString()
  @IsNotEmpty()
  category: string;
}
