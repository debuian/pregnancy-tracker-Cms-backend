import { PartialType } from '@nestjs/mapped-types';
import { CreateSymptomDto } from './create-symptom.dto';
import { ApiProperty } from '@nestjs/swagger';
import { SymptomExamples } from './swagger-response';

export class UpdateSymptomDto extends PartialType(CreateSymptomDto) {
  @ApiProperty({
    description: 'Name of the symptom',
    example: SymptomExamples.UPDATE.name,
    required: false,
  })
  name?: string;

  @ApiProperty({
    description: 'Description for the symptom',
    example: SymptomExamples.UPDATE.description,
    required: false,
  })
  description?: string;
}
