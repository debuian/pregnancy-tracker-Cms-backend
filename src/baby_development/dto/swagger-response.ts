import {
  BaseResponse,
  DeleteResultResponse,
} from 'src/common/swagger/base-response';
import { BabyDevelopmentEntity } from '../entities/baby_development.entity';
import { ApiProperty } from '@nestjs/swagger';
import { OrganDevelopmentEntity } from '../entities/organ_development.entity';
import { BabyMediaEntity } from '../entities/baby_media.entity';

export class BabyDevelopmentDataResponse extends BabyDevelopmentEntity {
  @ApiProperty({
    type: [OrganDevelopmentEntity],
    description:
      'List of organ development stages associated with the baby development record',
  })
  organ_development: OrganDevelopmentEntity[];

  @ApiProperty({
    type: [BabyMediaEntity],
    description:
      'List of media files associated with the baby development record',
  })
  media: BabyMediaEntity[];
}
export class BabyDevelopmentCreatedResponse extends BaseResponse<BabyDevelopmentDataResponse> {
  @ApiProperty({
    type: BabyDevelopmentDataResponse,
  })
  declare data: BabyDevelopmentDataResponse;
}

export class BabyDevelopmentListResponse extends BaseResponse<
  BabyDevelopmentDataResponse[]
> {
  @ApiProperty({
    type: [BabyDevelopmentDataResponse],
  })
  declare data: BabyDevelopmentDataResponse[];
}

export class BabyDevelopmentByWeekResponse extends BaseResponse<BabyDevelopmentDataResponse> {
  @ApiProperty({
    type: BabyDevelopmentDataResponse,
  })
  declare data: BabyDevelopmentDataResponse;
}

export class BabyDevelopmentByIdResponse extends BaseResponse<BabyDevelopmentDataResponse> {
  @ApiProperty({
    type: BabyDevelopmentDataResponse,
  })
  declare data: BabyDevelopmentDataResponse;
}

export class BabyDevelopmentDeleteResposne extends DeleteResultResponse {}

export class BabyDevelopmentUpdateResponse extends BaseResponse<BabyDevelopmentDataResponse> {
  @ApiProperty({
    type: BabyDevelopmentDataResponse,
  })
  declare data: BabyDevelopmentDataResponse;
}
