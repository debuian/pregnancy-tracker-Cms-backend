// dto/trimester-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { TrimesterEntity } from '../entities/trimester.entity';
import {
  BaseResponse,
  DeleteResultResponse,
} from 'src/common/swagger/base-response';

export class TrimesterData extends TrimesterEntity {
  @ApiProperty({
    description: 'Name of the trimester',
    example: 'First Trimester',
    type: String,
  })
  declare name: string;

  @ApiProperty({
    description: 'Abbreviation for the trimester',
    example: '1st',
    type: String,
  })
  declare abbreviation: string;

  @ApiProperty({
    description: 'Description of the trimester',
    example: 'The first trimester of pregnancy, covering weeks 1-12.',
    type: String,
  })
  declare description: string;
}

export class TrimesterUpdateData extends TrimesterEntity {
  @ApiProperty({
    description: 'Updated First Trimester',
    example: 'Updated First Trimeste',
    type: String,
  })
  declare name: string;

  @ApiProperty({
    description: 'Abbreviation for the trimester',
    example: 'UT1',
    type: String,
  })
  declare abbreviation: string;

  @ApiProperty({
    description: 'Updated description of the first trimester',
    example: 'Updated description of the first trimester',
    type: String,
  })
  declare description: string;
}

export class TrimesterCreateResponse extends BaseResponse<TrimesterData> {
  @ApiProperty({ type: TrimesterData })
  declare data: TrimesterData;
}
export class TrimesterListResponse extends BaseResponse<TrimesterData[]> {
  @ApiProperty({ type: [TrimesterData] })
  declare data: TrimesterData[];
}

export class TrimesterSingleResponse extends BaseResponse<TrimesterData> {
  @ApiProperty({ type: TrimesterData })
  declare data: TrimesterData;
}

export class TrimesterUpdateResposne extends BaseResponse<TrimesterUpdateData> {
  @ApiProperty({ type: TrimesterUpdateData })
  declare data: TrimesterUpdateData;
}
export class TrimesterDeleteResponse extends DeleteResultResponse {}
