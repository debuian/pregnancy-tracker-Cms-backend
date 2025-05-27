import { SymptomEntity } from 'src/symptoms/entities/symptom.entity';
import { MotherDevelopmentEntity } from '../entities/mother_development.entity';
import { ApiProperty } from '@nestjs/swagger';
import { MotherMediaEntity } from '../entities/mother_media.entity';
import {
  BaseResponse,
  DeleteResultResponse,
} from 'src/common/swagger/base-response';

export class MotherDevelopmentData extends MotherDevelopmentEntity {
  @ApiProperty({
    type: [SymptomEntity],
    description: 'List of symptoms experienced by the mother during this week',
  })
  symptoms: SymptomEntity[];

  @ApiProperty({
    type: [MotherMediaEntity],
    description: "List of media files related to the mother's development",
  })
  media: MotherMediaEntity[];
}

export class MotherDeveCreatedResponse extends BaseResponse<MotherDevelopmentData> {
  @ApiProperty({
    type: MotherDevelopmentData,
    description: 'Data of the created mother development record',
  })
  declare data: MotherDevelopmentData;
}

export class MotherDeveFindAllResponse extends BaseResponse<
  MotherDevelopmentData[]
> {
  @ApiProperty({
    type: [MotherDevelopmentData],
    description: 'List of all mother development records',
  })
  declare data: MotherDevelopmentData[];
}

export class MotherDeveFindOneResponse extends BaseResponse<MotherDevelopmentData> {
  @ApiProperty({
    type: MotherDevelopmentData,
    description: 'Data of the mother development record',
  })
  declare data: MotherDevelopmentData;
}

export class MotherDevUpdateResponse extends BaseResponse<MotherDevelopmentData> {
  @ApiProperty({
    type: MotherDevelopmentData,
    description: 'Data of the updated mother development record',
  })
  declare data: MotherDevelopmentData;
}

export class MotherDeveDeleteResponse extends DeleteResultResponse {}
