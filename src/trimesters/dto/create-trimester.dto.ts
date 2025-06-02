import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTrimesterDto {
  @ApiProperty({
    example: 'First Trimester',
    description: 'The name of the trimester',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: '1',
    description: 'Abbreviation for the trimester',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  abbreviation: string;

  @ApiProperty({
    example: 'The first trimester of pregnancy lasts from week 1 to week 12.',
    description: 'A brief description of the trimester',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  description: string;
}
