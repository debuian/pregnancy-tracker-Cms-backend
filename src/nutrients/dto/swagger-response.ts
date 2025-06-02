import {
  BaseResponse,
  DeleteResultResponse,
} from 'src/common/swagger/base-response';
import { NutrientEntity } from '../entities/nutrient.entity';
import { ApiProperty } from '@nestjs/swagger';

export const NutrientExamples = {
  BASE: {
    id: 1,
    name: 'Vitamin C',
    description:
      'Vitamin C is a water-soluble vitamin that is important for the growth and repair of tissues in the body.',
    food_source: 'ascorbic acid',
    category: 'water-soluble',
  },
  CREATE: {
    name: 'Vitamin C',
    description: 'Essential for immune function and collagen synthesis',
    food_source: 'Citrus fruits, bell peppers',
    category: 'water-soluble',
  },
  UPDATE: {
    name: 'Updated Nutrient Name',
    description: 'Updated description of the nutrient.',
    food_source: 'Updated food source of the nutrient.',
    category: 'Updated category of the nutrient.',
  },
  ARRAY: [
    {
      id: 1,
      name: 'Vitamin C',
      description:
        'Vitamin C is a water-soluble vitamin that is important for the growth and repair of tissues in the body.',
      food_source: 'ascorbic acid',
      category: 'water-soluble',
    },
    {
      id: 2,
      name: 'Vitamin C',
      description:
        'Vitamin C is a water-soluble vitamin that is important for the growth and repair of tissues in the body.',
      food_source: 'ascorbic acid',
      category: 'water-soluble',
    },
  ],
};

export class NutrientData extends NutrientEntity {
  @ApiProperty({
    example: NutrientExamples.BASE.name,
    description: 'Name of the nutrient',
  })
  declare name: string;

  @ApiProperty({
    example: NutrientExamples.BASE.description,
    description: 'Description of the nutrient',
  })
  declare description: string;

  @ApiProperty({
    example: NutrientExamples.BASE.food_source,
    description: 'Chemical formula of the nutrient',
  })
  declare food_source: string;

  @ApiProperty({
    example: NutrientExamples.BASE.category,
    description: 'Category of the nutrient',
  })
  declare category: string;
}
export class NutrientCreatedResponse extends BaseResponse<NutrientData> {
  @ApiProperty({
    type: NutrientData,
    description: 'Created nutrient data',
    example: NutrientExamples.CREATE,
  })
  declare data: NutrientData;
}

export class NutrientUpdatedResponse extends BaseResponse<NutrientData> {
  @ApiProperty({
    type: NutrientData,
    description: 'Updated nutrient data',
    example: NutrientExamples.UPDATE,
  })
  declare data: NutrientData;
}

export class NutrientArrayResponse extends BaseResponse<NutrientData[]> {
  @ApiProperty({
    type: [NutrientData],
    description: 'Array of nutrient data',
    example: NutrientExamples.ARRAY,
  })
  declare data: NutrientData[];
}

export class NutrientSingleResponse extends BaseResponse<NutrientData> {
  @ApiProperty({
    type: NutrientData,
    description: 'Single nutrient data',
    example: NutrientExamples.BASE,
  })
  declare data: NutrientData;
}

export class NutrientDeletedResponse extends DeleteResultResponse {}
