import {
  BaseResponse,
  DeleteResultResponse,
} from 'src/common/swagger/base-response';
import { NutrientEntity } from '../entities/nutrient.entity';
import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

export class NutrientCreatedResponse extends BaseResponse<NutrientEntity> {
  @ApiProperty({ type: NutrientEntity, description: 'Created organ data' })
  declare data: NutrientEntity;
}

export class NutrientUpdatedResponse extends BaseResponse<NutrientEntity> {
  @ApiProperty({
    type: NutrientEntity,
    description: 'Updated organ data',
    example: {
      id: 1,
      name: 'Updated Nutrient Name',
      description: 'Updated description of the nutrient.',
      food_source: 'Updated food source of the nutrient.',
      category: 'Updated category of the nutrient.',
    },
  })
  declare data: NutrientEntity;
}

export class NutrientDeletedResponse extends DeleteResultResponse {}

export class NutrientArrayResponse extends BaseResponse<NutrientEntity[]> {
  @ApiProperty({
    type: [NutrientEntity],
    description: 'Array of nutrient data',
  })
  declare data: NutrientEntity[];
}

export class NutrientSingleResponse extends BaseResponse<NutrientEntity> {
  @ApiProperty({
    type: NutrientEntity,
    description: 'Single nutrient data',
  })
  declare data: NutrientEntity;
}
