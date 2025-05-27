import { PartialType } from '@nestjs/mapped-types';
import { CreateOrganDto } from './create-organ.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrganDto extends PartialType(CreateOrganDto) {
  @ApiProperty({
    example: 'Updated Organ Name',
    description: 'Name of the organ',
    type: String,
    required: false,
  })
  name?: string | undefined;

  @ApiProperty({
    example: 'Updated description of the organ.',
    description: 'Description of the organ',
    type: String,
    required: false,
  })
  description?: string | undefined;
}
