// dto/trimester-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { TrimesterEntity } from '../entities/trimester.entity';
import { DeleteResultResponse } from 'src/common/swagger/base-response';

export class TrimesterResponse {
  @ApiProperty({ example: 'success' })
  status: string;

  @ApiProperty({ type: TrimesterEntity })
  data: TrimesterEntity;
}

export class TrimesterArrayResponse {
  @ApiProperty({ example: 'success' })
  status: string;

  @ApiProperty({ type: [TrimesterEntity] })
  data: TrimesterEntity[];
}

export class TrimesterDeleteResponse extends DeleteResultResponse {}
