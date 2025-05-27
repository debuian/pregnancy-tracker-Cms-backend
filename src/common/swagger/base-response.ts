import { ApiProperty } from '@nestjs/swagger';

export class BaseResponse<T> {
  @ApiProperty({ example: 'success' })
  status: string;

  // Mark `T` for Swagger (you'll still need to use `@ApiExtraModels`)
  @ApiProperty({ description: 'Wrapped response data' })
  data: T;
}

// for delete response
export class DeleteResult {
  @ApiProperty({ example: [], description: 'Raw database result' })
  raw: any[];

  @ApiProperty({ example: 1, description: 'Number of affected rows' })
  affected: number;
}

export class DeleteResultResponse extends BaseResponse<DeleteResult> {
  @ApiProperty({
    type: DeleteResult,
    description: 'Delete operation result',
  })
  declare data: DeleteResult;
}
