import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/global/entity/baseEntity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'symptoms' })
export class SymptomEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;
}
