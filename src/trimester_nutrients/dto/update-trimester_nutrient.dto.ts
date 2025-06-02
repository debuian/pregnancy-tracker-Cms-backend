import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateTrimesterNutrientDto } from './create-trimester_nutrient.dto';
import { TrimesterNutrientExamples } from './swagger-response';

export class UpdateTrimesterNutrientDto extends PartialType(
  CreateTrimesterNutrientDto,
) {
  @ApiProperty({
    description: 'Recommendation for the nutrient in the trimester',
    example: TrimesterNutrientExamples.UPDATE.recommendation,
    required: false,
  })
  recommendation?: string;

  @ApiProperty({
    description:
      'Daily amount of the nutrient recommended during the trimester',
    example: TrimesterNutrientExamples.UPDATE.daily_amount,
    required: false,
  })
  daily_amount?: string;

  @ApiProperty({
    description: 'ID of the trimester',
    example: TrimesterNutrientExamples.CREATE.trimesterId,
  })
  trimesterId: number;

  @ApiProperty({
    description: 'ID of the nutrient',
    example: TrimesterNutrientExamples.CREATE.nutrientId,
  })
  nutrientId: number;
}
