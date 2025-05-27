import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import { OrganEntity } from '../entities/organ.entity';
import {
  BaseResponse,
  DeleteResultResponse,
} from 'src/common/swagger/base-response';

export class OrganCreatedResponse extends BaseResponse<OrganEntity> {
  // The `type` helps Swagger generate the correct schema using OrganEntity.
  // Since OrganEntity has @ApiProperty decorators, its properties are automatically referenced in the documentation.
  // Example values are taken from OrganEntity unless overridden here.
  @ApiProperty({ type: OrganEntity, description: 'Created organ data' })
  declare data: OrganEntity;
}

export class OrganUpdatedResponse {
  @ApiProperty({ example: 'success', description: 'Response status' })
  status: string;

  @ApiProperty({
    type: OrganEntity,
    description: 'Updated organ data',
    example: {
      id: 1,
      name: 'Updated Organ Name',
      description: 'Updated description of the organ.',
    },
  })
  data: OrganEntity;
}

export class OrganDeleteResponse extends DeleteResultResponse {}

export class OrganArrayResponse {
  @ApiProperty({ example: 'success', description: 'Response status' })
  status: string;

  @ApiProperty({
    type: [OrganEntity],
    description: 'Array of organ data',
  })
  data: OrganEntity[];
}

export class OragnSingleResponse {
  @ApiProperty({ example: 'success', description: 'Response status' })
  status: string;

  @ApiProperty({
    type: OrganEntity,
    description: 'Single organ data',
  })
  data: OrganEntity;
}
