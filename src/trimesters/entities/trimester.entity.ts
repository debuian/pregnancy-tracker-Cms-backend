import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/global/entity/baseEntity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'trimesters' })
//Response DTO for the trimester entity for Fallback
export class TrimesterEntity extends BaseEntity {
  @ApiProperty({
    description: 'Name of the trimester',
    example: 'First Trimester',
    type: String,
  })
  @Column()
  name: string;

  @ApiProperty({
    description: 'Abbreviation for the trimester',
    example: '1st',
    type: String,
  })
  @Column()
  abbreviation: string;

  @ApiProperty({
    description: 'Description of the trimester',
    example: 'The first trimester of pregnancy, covering weeks 1-12.',
    type: String,
  })
  @Column()
  description: string;
}
