import { ApiProperty } from '@nestjs/swagger';

class OrganDevelopmentInput {
  organId: number;
  development_stage: string; // fixed typo
}

export class CreateBabyDevelopmentDto {
  weekId: number;
  weight_kg: number;
  lenght_cm: number;
  milestones: string;
  sensory_development: string;
  // Organ development details muultiple
  organ_developments?: OrganDevelopmentInput[];
}

export class CreateBabyDevelopmentFormData {
  @ApiProperty({
    type: 'array',
    items: {
      type: 'string',
      format: 'binary',
    },
    description: 'Development photos/documents',
    required: false,
  })
  files?: Express.Multer.File[];

  @ApiProperty({
    type: CreateBabyDevelopmentDto,
    description: 'Baby development data as JSON string',
    example: JSON.stringify({
      weekId: 1,
      weight_kg: 0.25,
      lenght_cm: 4.5,
      milestones: 'Heartbeat is strong and detectable.',
      sensory_development: 'Eyes and ears are forming.',
      organ_developments: [
        {
          organId: 1,
          development_stage: 'Forming chambers',
        },
      ],
    }),
  })
  data: string; // This will contain the stringified CreateBabyDevelopmentDto
}
