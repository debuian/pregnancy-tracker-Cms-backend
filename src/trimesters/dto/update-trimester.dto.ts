import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTrimesterDto } from './create-trimester.dto';

export class UpdateTrimesterDto extends PartialType(CreateTrimesterDto) {
  @ApiProperty({
    required: false,
    example: 'Updated First Trimester',
    description: 'The updated name of the trimester',
  })
  name?: string;

  @ApiProperty({
    required: false,
    example: 'UT1',
    description: 'Updated abbreviation for the trimester',
  })
  abbreviation?: string;

  @ApiProperty({
    required: false,
    example: 'Updated description of the first trimester',
    description: 'Updated description of the trimester',
  })
  description?: string;
}
