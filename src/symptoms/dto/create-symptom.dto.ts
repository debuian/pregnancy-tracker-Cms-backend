import { ApiProperty } from '@nestjs/swagger';

export class CreateSymptomDto {
  @ApiProperty({
    description: 'Name of the symptom',
    example: 'Nausea',
    type: String,
    required: true,
  })
  name: string;

  @ApiProperty({
    description: 'Description for the symptom',
    example: 'Feeling of sickness with an inclination to vomit.',
    type: String,
    required: true,
  })
  description: string;
}
