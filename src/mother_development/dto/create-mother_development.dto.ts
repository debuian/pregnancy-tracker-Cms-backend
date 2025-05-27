import { ApiProperty } from '@nestjs/swagger';

class SymptomDto {
  symptomId: number;
  severity: string;
}
export class CreateMotherDevelopmentDto {
  weekId: number;
  physical_changes: string;
  hormonal_changes: string;
  symptoms: SymptomDto[];
}

export class CreateMotherDevelopmentFormDto {
  files?: Express.Multer.File[];
  data: string; // Will contain stringified CreateMotherDevelopmentDto
}

export class CreateMotherDeveSwagger {
  @ApiProperty({
    type: 'array',
    items: {
      type: 'string',
      format: 'binary',
    },
    description: 'Development photos/documents',
    required: false,
  })
  files?: any[];

  @ApiProperty({
    type: CreateMotherDevelopmentDto,
    description: 'Baby development data as JSON string',
    example: JSON.stringify({
      weekId: 2,
      physical_changes:
        'Increased breast tenderness, slight abdominal swelling.',
      hormonal_changes:
        'Estrogen and progesterone levels continue to rise, leading to fatigue and nausea.',
      symptoms: [
        {
          symptomId: 1,
          severity: 'Mild',
        },
      ],
    }),
  })
  data: string;
}
