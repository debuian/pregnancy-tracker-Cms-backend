import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { SymptomExamples } from './swagger-response';

export class CreateSymptomDto {
  @ApiProperty({
    description: 'Name of the symptom',
    example: SymptomExamples.CREATE.name,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Description for the symptom',
    example: SymptomExamples.CREATE.description,
  })
  @IsNotEmpty()
  @IsString()
  description: string;
}
