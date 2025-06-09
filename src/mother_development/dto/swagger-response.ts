import { SymptomEntity } from 'src/symptoms/entities/symptom.entity';
import { MotherDevelopmentEntity } from '../entities/mother_development.entity';
import { ApiProperty } from '@nestjs/swagger';
import { MotherMediaEntity } from '../entities/mother_media.entity';
import {
  BaseResponse,
  DeleteResultResponse,
} from 'src/common/swagger/base-response';
import { WeekEntity } from 'src/weeks/entities/week.entity';

export class MotherDevelopmentData extends MotherDevelopmentEntity {
  @ApiProperty({
    type: WeekEntity,
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
    description: 'List of symptoms experienced by the mother during this week',
  })
  declare week: WeekEntity;

  @ApiProperty({
    type: [SymptomEntity],
    example: [
      {
        id: 14,
        symptom: {
          id: 1,
          name: 'Updated Fatigue',
          description:
            'Extreme tiredness due to hormonal changes and increased metabolic demands',
        },
      },
    ],
    description: 'List of symptoms experienced by the mother during this week',
  })
  symptoms: SymptomEntity[];

  @ApiProperty({
    type: [MotherMediaEntity],
    example: [
      {
        id: 9,
        mediaUrl: 'uploads/1748322603526-Screenshotfrom2025-05-2617-07-50.png',
        caption: 'Screenshot from 2025-05-26 17-07-50.png',
        mediaType: 'image',
      },
      {
        id: 10,
        mediaUrl: 'uploads/1748322603526-Screenshotfrom2025-05-1311-40-31.png',
        caption: 'Screenshot from 2025-05-13 11-40-31.png',
        mediaType: 'image',
      },
    ],
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
