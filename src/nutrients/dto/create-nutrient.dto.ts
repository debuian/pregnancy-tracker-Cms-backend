import { ApiProperty } from '@nestjs/swagger';

export class CreateNutrientDto {
  @ApiProperty({
    example: 'Vitamin C',
    description: 'Name of the nutrient',
    type: String,
  })
  name: string;
  @ApiProperty({
    example:
      'Vitamin C is a water-soluble vitamin that is important for the growth and repair of tissues in the body.',
    description: 'Description of the nutrient',
    type: String,
  })
  description: string;

  @ApiProperty({
    example: 'ascorbic acid',
    description: 'Chemical formula of the nutrient',
    type: String,
  })
  food_source: string;

  @ApiProperty({
    example: 'water-soluble',
    description: 'Category of the nutrient',
    type: String,
  })
  category: string;
}
