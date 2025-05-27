import { ApiProperty } from '@nestjs/swagger';
import { WeekEntity } from '../entities/week.entity';
import { DeleteResultResponse } from 'src/common/swagger/base-response';

export class WeekResponse {
  @ApiProperty({ example: 'success' })
  status: string;

  @ApiProperty({ type: WeekEntity })
  data: WeekEntity;
}

export class WeekArraayResponse {
  @ApiProperty({ type: 'string', example: 'success' })
  status: string;

  @ApiProperty({ type: [WeekEntity] })
  data: WeekEntity[];
}

export class WeekDeleteResponse extends DeleteResultResponse {}
