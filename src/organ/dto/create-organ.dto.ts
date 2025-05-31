import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateOrganDto {
  @ApiProperty({
    example: 'heart',
    description: 'Name of the organ',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty({
    example:
      'The heart is a muscular organ that pumps blood through the circulatory system.',
    description: 'Description of the organ',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  description: string;
}
