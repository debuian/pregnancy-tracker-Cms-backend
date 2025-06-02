import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import { OrganEntity } from '../entities/organ.entity';
import {
  BaseResponse,
  DeleteResultResponse,
} from 'src/common/swagger/base-response';

const organExample = {
  create: {
    name: 'heart',
    description:
      'The heart is a muscular organ that pumps blood through the circulatory system.',
  },
  update: {
    name: 'Updated Organ Name',
    description: 'Updated description of the organ.',
  },
};
export class OrganData extends OrganEntity {
  @ApiProperty({
    example: organExample.create.name,
    description: 'Name of the organ',
  })
  declare name: string;

  @ApiProperty({
    example: organExample.create.description,
    description: 'Description of the organ',
  })
  declare description: string;
}
export class OrganUpdatedData extends OrganEntity {
  @ApiProperty({
    example: organExample.update.name,
  })
  declare name: string;

  @ApiProperty({
    example: organExample.update.description,
  })
  declare description: string;
}

export class OrganCreatedResponse extends BaseResponse<OrganData> {
  // The `type` helps Swagger generate the correct schema using OrganEntity.
  // Since OrganEntity has @ApiProperty decorators, its properties are automatically referenced in the documentation.
  // Example values are taken from OrganEntity unless overridden here.
  @ApiProperty({ type: OrganData, description: 'Created organ data' })
  declare data: OrganData;
}

export class OrganUpdatedResponse extends BaseResponse<OrganUpdatedData> {
  @ApiProperty({
    type: OrganUpdatedData,
    description: 'Updated organ data',
  })
  declare data: OrganUpdatedData;
}

export class OrganArrayResponse extends BaseResponse<OrganData[]> {
  @ApiProperty({
    type: [OrganData],
    description: 'Array of organ data',
  })
  declare data: OrganData[];
}

export class OragnSingleResponse extends BaseResponse<OrganData> {
  @ApiProperty({
    type: OrganData,
    description: 'Single organ data',
  })
  declare data: OrganData;
}
export class OrganDeleteResponse extends DeleteResultResponse {}
