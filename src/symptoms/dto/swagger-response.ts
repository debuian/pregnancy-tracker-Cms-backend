import {
  BaseResponse,
  DeleteResultResponse,
} from 'src/common/swagger/base-response';
import { SymptomEntity } from '../entities/symptom.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Delete } from '@nestjs/common';

export class SymptomCreatedResponse extends BaseResponse<SymptomEntity> {
  @ApiProperty({
    type: SymptomEntity,
    description: 'Created symptom data',
  })
  declare data: SymptomEntity;
}

export class SymptomUpdatedResponse extends BaseResponse<SymptomEntity> {
  @ApiProperty({
    type: SymptomEntity,
    description: 'Updated symptom data',
  })
  declare data: SymptomEntity;
}

export class SymptomDeletedResponse extends DeleteResultResponse {}

export class SymptomListResponse extends BaseResponse<SymptomEntity[]> {
  @ApiProperty({
    type: [SymptomEntity],
    description: 'List of symptoms',
  })
  declare data: SymptomEntity[];
}
export class SymptomFindOneResponse extends BaseResponse<SymptomEntity> {
  @ApiProperty({
    type: SymptomEntity,
    description: 'Found symptom data',
  })
  declare data: SymptomEntity;
}
