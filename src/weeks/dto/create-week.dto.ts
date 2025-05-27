import { ApiProperty } from '@nestjs/swagger';

export class CreateWeekDto {
  @ApiProperty({
    example: 1,
    description: 'The unique identifier for the week',
    required: true,
  })
  weekNumber: number;
  @ApiProperty({
    example: 'Week 1',
    description: 'The title of the week',
    required: true,
  })
  title: string;
  @ApiProperty({
    example: 'This is a summary of week 1.',
    description: 'A brief summary of the week',
    required: true,
  })
  summary: string;

  @ApiProperty({
    example: 1,
    description: 'A detailed description of the week',
    required: true,
  })
  trimesterId: number;
}
