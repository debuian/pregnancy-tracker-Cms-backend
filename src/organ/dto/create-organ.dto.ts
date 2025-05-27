import { ApiProperty } from '@nestjs/swagger';

export class CreateOrganDto {
  @ApiProperty({
    example: 'heart',
    description: 'Name of the organ',
    type: String,
  })
  name: string;
  @ApiProperty({
    example:
      'The heart is a muscular organ that pumps blood through the circulatory system.',
    description: 'Description of the organ',
    type: String,
  })
  description: string;
}
