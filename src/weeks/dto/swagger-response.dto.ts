import { ApiProperty } from '@nestjs/swagger';
import { WeekEntity } from '../entities/week.entity';
import {
  BaseResponse,
  DeleteResultResponse,
} from 'src/common/swagger/base-response';
import { TrimesterData } from 'src/trimesters/dto/swagger-response';
import { SwaggerExampleConfig } from 'src/common/swagger/swagger-config';

export class WeekData extends WeekEntity {
  @ApiProperty({
    example: SwaggerExampleConfig.week.create.weekNumber,
    description: 'The unique identifier for the week',
    required: true,
  })
  declare weekNumber: number;

  @ApiProperty({
    example: SwaggerExampleConfig.week.create.title,
    description: 'The title of the week',
    required: true,
  })
  declare title: string;

  @ApiProperty({
    example: SwaggerExampleConfig.week.create.summary,
    description: 'A brief summary of the week',
    required: true,
  })
  declare summary: string;

  @ApiProperty({
    description: 'The ID of the trimester this week belongs to',
    required: true,
  })
  declare trimester: TrimesterData;
}

export class WeekUpdatedData extends WeekEntity {
  @ApiProperty({
    example: SwaggerExampleConfig.week.update.weekNumber,
    description: 'The updated unique identifier for the week',
    required: false, // Mark as optional for updates
  })
  declare weekNumber: number;

  @ApiProperty({
    example: SwaggerExampleConfig.week.update.title,
    description: 'The updated title of the week',
    required: false,
  })
  declare title: string;

  @ApiProperty({
    example: SwaggerExampleConfig.week.update.summary,
    description: 'An updated brief summary of the week',
    required: false, // Mark as optional for updates
  })
  declare summary: string;

  @ApiProperty({
    description: 'The ID of the trimester this week belongs to',
  })
  declare trimester: TrimesterData;
}
export class WeekCreatedResponse extends BaseResponse<WeekData> {
  @ApiProperty({ type: WeekData })
  declare data: WeekData;
}
export class WeekSingleResponse extends BaseResponse<WeekData> {
  @ApiProperty({ type: WeekData })
  declare data: WeekData;
}

export class WeekListResponse extends BaseResponse<WeekData[]> {
  @ApiProperty({ type: [WeekData] })
  declare data: WeekData[];
}
export class WeekUpdateResponse extends BaseResponse<WeekUpdatedData> {
  @ApiProperty({ type: WeekUpdatedData })
  declare data: WeekUpdatedData;
}

export class WeekDeleteResponse extends DeleteResultResponse {}
