import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSymptomDto {
  @ApiProperty({
    description: 'Name of the symptom',
    example: 'Nausea',
    type: String,
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Description for the symptom',
    example: 'Feeling of sickness with an inclination to vomit.',
    type: String,
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  description: string;
}
