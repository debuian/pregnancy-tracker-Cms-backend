import { BaseEntity } from 'src/global/entity/baseEntity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { MotherDevelopmentEntity } from './mother_development.entity';
import { SymptomEntity } from 'src/symptoms/entities/symptom.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'mother_symptoms' })
export class MotherSymptomsEntity extends BaseEntity {
  @ManyToOne(() => MotherDevelopmentEntity, {
    nullable: false,
    eager: false,
    onDelete: 'CASCADE',
  })
  motherDevelopment: MotherDevelopmentEntity;

  @ApiProperty({
    type: SymptomEntity,
    description: 'Unique identifier for the symptom',
  })
  @ManyToOne(() => SymptomEntity, {
    nullable: false,
    eager: true,
    onDelete: 'CASCADE',
  })
  symptom: SymptomEntity;

  @ApiProperty({
    type: String,
    description: 'Severity of the symptom (e.g., mild, moderate, severe)',
    example: 'mild',
  })
  @Column()
  severity: string;
}
