import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { TrimesterNutrientExamples } from './swagger-response';

export class CreateTrimesterNutrientDto {
  @ApiProperty({
    description: 'ID of the trimester',
    example: TrimesterNutrientExamples.CREATE.trimesterId,
  })
  @IsNumber()
  @IsNotEmpty()
  trimesterId: number;

  @ApiProperty({
    description: 'ID of the nutrient',
    example: TrimesterNutrientExamples.CREATE.nutrientId,
  })
  @IsNumber()
  @IsNotEmpty()
  nutrientId: number;

  @ApiProperty({
    description: 'Recommendation for the nutrient in the trimester',
    example: TrimesterNutrientExamples.CREATE.recommendation,
  })
  @IsString()
  @IsNotEmpty()
  recommendation: string;

  @ApiProperty({
    description:
      'Daily amount of the nutrient recommended during the trimester',
    example: TrimesterNutrientExamples.CREATE.daily_amount,
  })
  @IsString()
  @IsNotEmpty()
  daily_amount: string;
}
