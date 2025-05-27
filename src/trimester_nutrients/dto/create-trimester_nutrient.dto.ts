import { ApiProperty } from '@nestjs/swagger';

export class CreateTrimesterNutrientDto {
  @ApiProperty({
    description: 'ID of the trimester',
    example: 1,
    type: Number,
  })
  trimesterId: number;
  @ApiProperty({
    description: 'ID of the nutrient',
    example: 1,
    type: Number,
  })
  nutrientId: number;

  @ApiProperty({
    description: 'recommendation for the nutrient in the trimester',
    example: 'Increase intake of folic acid to prevent neural tube defects.',
    type: String,
  })
  recommendation: string;

  @ApiProperty({
    description:
      'Daily amount of the nutrient recommended during the trimester',
    example: '400.00',
    type: String,
  })
  daily_amount: string;
}
