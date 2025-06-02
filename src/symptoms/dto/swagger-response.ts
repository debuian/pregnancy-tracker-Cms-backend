import {
  BaseResponse,
  DeleteResultResponse,
} from 'src/common/swagger/base-response';
import { SymptomEntity } from '../entities/symptom.entity';
import { ApiProperty } from '@nestjs/swagger';

export const SymptomExamples = {
  BASE: {
    id: 1,
    name: 'Nausea',
    description: 'Feeling of sickness with an inclination to vomit.',
  },
  CREATE: {
    name: 'Nausea',
    description: 'Feeling of sickness with an inclination to vomit.',
  },
  UPDATE: {
    name: 'Updated Nausea',
    description: 'Updated description of nausea symptom.',
  },
  ARRAY: [
    {
      id: 1,
      name: 'Nausea',
      description: 'Feeling of sickness',
    },
    {
      id: 2,
      name: 'Headache',
      description: 'Pain in head or neck region',
    },
  ],
};
export class SymptomData extends SymptomEntity {
  @ApiProperty({
    description: 'Name of the symptom',
    example: SymptomExamples.BASE.name,
  })
  declare name: string;

  @ApiProperty({
    description: 'Description for the symptom',
    example: SymptomExamples.BASE.description,
  })
  declare description: string;
}

export class SymptomCreatedResponse extends BaseResponse<SymptomData> {
  @ApiProperty({
    type: SymptomData,
    description: 'Created symptom data',
  })
  declare data: SymptomData;
}

export class SymptomUpdatedResponse extends BaseResponse<SymptomData> {
  @ApiProperty({
    type: SymptomData,
    description: 'Updated symptom data',
    example: { ...SymptomExamples.BASE, ...SymptomExamples.UPDATE },
  })
  declare data: SymptomData;
}

export class SymptomListResponse extends BaseResponse<SymptomData[]> {
  @ApiProperty({
    type: [SymptomData],
    description: 'List of symptoms',
  })
  declare data: SymptomData[];
}

export class SymptomFindOneResponse extends BaseResponse<SymptomData> {
  @ApiProperty({
    type: SymptomData,
    description: 'Found symptom data',
  })
  declare data: SymptomData;
}

export class SymptomDeletedResponse extends DeleteResultResponse {}
