import { ApiProperty } from '@nestjs/swagger';
import { TrimesterNutrientEntity } from '../entities/trimester_nutrient.entity';
import {
  BaseResponse,
  DeleteResultResponse,
} from 'src/common/swagger/base-response';
import { TrimesterEntity } from 'src/trimesters/entities/trimester.entity';
import { NutrientEntity } from 'src/nutrients/entities/nutrient.entity';
import { NutrientExamples } from 'src/nutrients/dto/swagger-response';
export const TrimesterNutrientExamples = {
  BASE: {
    id: 1,
    trimester: {
      id: 1,
      name: 'First Trimester',
      abbreviation: '1st',
      description: 'The first trimester of pregnancy, covering weeks 1-12.',
    },
    nutrient: NutrientExamples.BASE,
    recommendation:
      'Increase intake of folic acid to prevent neural tube defects.',
    daily_amount: '400.00',
  },
  CREATE: {
    trimesterId: 1,
    nutrientId: 1,
    recommendation:
      'Increase intake of folic acid to prevent neural tube defects.',
    daily_amount: '400.00',
  },
  UPDATE: {
    recommendation: 'Updated recommendation for folic acid intake.',
    daily_amount: '500.00',
  },
  ARRAY: [
    {
      id: 1,
      trimester: { id: 1, name: 'First Trimester' },
      nutrient: { id: 1, name: 'Folic Acid' },
      recommendation: 'Folic acid recommendation',
      daily_amount: '400.00',
    },
    {
      id: 2,
      trimester: { id: 1, name: 'First Trimester' },
      nutrient: { id: 2, name: 'Iron' },
      recommendation: 'Iron recommendation',
      daily_amount: '27.00',
    },
  ],
};

export class TrimesterNutrientData extends TrimesterNutrientEntity {
  @ApiProperty({
    type: () => TrimesterEntity,
    description: 'The trimester associated with this nutrient recommendation',
    example: TrimesterNutrientExamples.BASE.trimester,
  })
  declare trimester: TrimesterEntity;

  @ApiProperty({
    description: 'The nutrient associated with this recommendation',
    example: NutrientExamples.BASE,
  })
  declare nutrient: NutrientEntity;

  @ApiProperty({
    description: 'Recommendation for the nutrient during the trimester',
    example: TrimesterNutrientExamples.BASE.recommendation,
  })
  declare recommendation: string;

  @ApiProperty({
    description:
      'Daily amount of the nutrient recommended during the trimester',
    example: TrimesterNutrientExamples.BASE.daily_amount,
  })
  declare daily_amount: string;
}

export class TrimesterNutrientCreatedResponse extends BaseResponse<TrimesterNutrientData> {
  @ApiProperty({
    type: TrimesterNutrientData,
    description: 'Created trimester nutrient data',
  })
  declare data: TrimesterNutrientData;
}

export class TrimesterNutrientUpdatedResponse extends BaseResponse<TrimesterNutrientData> {
  @ApiProperty({
    type: TrimesterNutrientData,
    description: 'Updated trimester nutrient data',
    example: {
      ...TrimesterNutrientExamples.BASE,
      ...TrimesterNutrientExamples.UPDATE,
    },
  })
  declare data: TrimesterNutrientData;
}

export class TrimesterNutrientListResponse extends BaseResponse<
  TrimesterNutrientData[]
> {
  @ApiProperty({
    type: [TrimesterNutrientData],
    description: 'List of trimester nutrients',
  })
  declare data: TrimesterNutrientData[];
}

export class TrimesterNutrientFindOneResponse extends BaseResponse<TrimesterNutrientData> {
  @ApiProperty({
    type: TrimesterNutrientData,
    description: 'Found trimester nutrient data',
  })
  declare data: TrimesterNutrientData;
}

export class TrimesterNutrientDeletedResponse extends DeleteResultResponse {}
