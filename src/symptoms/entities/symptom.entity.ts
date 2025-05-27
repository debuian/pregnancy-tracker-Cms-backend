import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/global/entity/baseEntity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'symptoms' })
export class SymptomEntity extends BaseEntity {
  @ApiProperty({
    description: 'Name of the symptom',
    example: 'Nausea',
    type: String,
  })
  @Column()
  name: string;

  @ApiProperty({
    description: 'Description for the symptom',
    example: 'Feeling of sickness with an inclination to vomit.',
    type: String,
  })
  @Column()
  description: string;
}
