import { PartialType } from '@nestjs/mapped-types';
import { CreateWeekDto } from './create-week.dto';
import { ApiProperty } from '@nestjs/swagger';
import { SwaggerExampleConfig } from 'src/common/swagger/swagger-config';

export class UpdateWeekDto extends PartialType(CreateWeekDto) {
  @ApiProperty({
    example: SwaggerExampleConfig.week.update.weekNumber,
    description: 'The updated unique identifier for the week',
    required: false, // Mark as optional for updates
  })
  weekNumber?: number;

  @ApiProperty({
    example: SwaggerExampleConfig.week.update.title,
    description: 'The updated title of the week',
    required: false,
  })
  title?: string;

  @ApiProperty({
    example: SwaggerExampleConfig.week.update.summary,
    description: 'An updated brief summary of the week',
    required: false, // Mark as optional for updates
  })
  summary?: string;

  @ApiProperty({
    example: SwaggerExampleConfig.week.update.trimesterId,
    description: 'The updated trimester ID associated with the week',
    required: false, // Mark as optional for updates
  })
  trimesterId?: number;
}
