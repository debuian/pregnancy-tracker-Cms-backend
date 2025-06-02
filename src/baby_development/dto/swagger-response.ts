import {
  BaseResponse,
  DeleteResultResponse,
} from 'src/common/swagger/base-response';
import { BabyDevelopmentEntity } from '../entities/baby_development.entity';
import { ApiProperty } from '@nestjs/swagger';
import { OrganDevelopmentEntity } from '../entities/organ_development.entity';
import { BabyMediaEntity } from '../entities/baby_media.entity';
import { WeekEntity } from 'src/weeks/entities/week.entity';

export const BabyDevelopmentExamples = {
  BASE: {
    id: 1,
    weight_kg: '0.05',
    length_cm: '3.0',
    milestones: 'Heart begins to beat, neural tube forms',
    sensory_development: 'Basic brain structure forms',
    week: { id: 5, name: 'Week 5' },
    createdAt: '2023-01-01T00:00:00.000Z',
    updatedAt: '2023-01-01T00:00:00.000Z',
  },
  CREATE: {
    weekId: 5,
    weight_kg: '0.05',
    length_cm: '3.0',
    milestones: 'Heart begins to beat, neural tube forms',
    sensory_development: 'Basic brain structure forms',
    organ_developments: [
      {
        organId: 1,
        development_stage: 'Heart begins to form chambers',
      },
    ],
  },
  UPDATE: {
    weight_kg: '0.06',
    length_cm: '3.2',
    milestones: 'Updated milestones description',
    sensory_development: 'Updated sensory development info',
  },
  ORGAN_DEVELOPMENT: {
    id: 1,
    development_stage: 'Heart begins to form chambers',
    organ: { id: 1, name: 'Heart' },
  },
  MEDIA: {
    id: 1,
    mediaUrl: 'https://example.com/ultrasound.jpg',
    caption: 'First ultrasound image',
    mediaType: 'image',
  },
};
export class BabyDevelopmentDataResponse extends BabyDevelopmentEntity {
  @ApiProperty({
    example: {
      id: 2,
      weekNumber: 32,
      title: 'Week 32',
      summary: 'Rapid weight gain and lung development',
      trimester: {
        id: 11,
        name: 'Updated Third Trimester',
        abbreviation: 'UT3',
        description:
          'The first trimester of pregnancy lasts from week 1 to week 12.',
      },
    },
  })
  declare week: WeekEntity;
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
