import { ApiProperty } from '@nestjs/swagger';
import { TrimesterNutrientEntity } from '../entities/trimester_nutrient.entity';
import {
  BaseResponse,
  DeleteResultResponse,
} from 'src/common/swagger/base-response';
import { Delete } from '@nestjs/common';

export class TrimesterNutrientCreatedResponse extends BaseResponse<TrimesterNutrientEntity> {
  @ApiProperty({
    type: TrimesterNutrientEntity,
    description: 'Created trimester nutrient data',
  })
  declare data: TrimesterNutrientEntity;
}

export class TrimesterNutrientUpdatedResponse extends BaseResponse<TrimesterNutrientEntity> {
  @ApiProperty({
    type: TrimesterNutrientEntity,
    description: 'Updated trimester nutrient data',
  })
  declare data: TrimesterNutrientEntity;
}

export class TrimesterNutrientDeletedResponse extends DeleteResultResponse {}

export class TrimesterNutrientListResponse extends BaseResponse<
  TrimesterNutrientEntity[]
> {
  @ApiProperty({
    type: [TrimesterNutrientEntity],
    description: 'List of trimester nutrients',
  })
  declare data: TrimesterNutrientEntity[];
}
export class TrimesterNutrientFindOneResponse extends BaseResponse<TrimesterNutrientEntity> {
  @ApiProperty({
    type: TrimesterNutrientEntity,
    description: 'Found trimester nutrient data',
  })
  declare data: TrimesterNutrientEntity;
}
