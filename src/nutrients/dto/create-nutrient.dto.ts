import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateNutrientDto {
  @ApiProperty({
    example: 'Vitamin C',
    description: 'Name of the nutrient',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example:
      'Vitamin C is a water-soluble vitamin that is important for the growth and repair of tissues in the body.',
    description: 'Description of the nutrient',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: 'ascorbic acid',
    description: 'Chemical formula of the nutrient',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  food_source: string;

  @ApiProperty({
    example: 'water-soluble',
    description: 'Category of the nutrient',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  category: string;
}
