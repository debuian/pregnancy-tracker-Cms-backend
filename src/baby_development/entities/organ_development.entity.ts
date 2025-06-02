import { BaseEntity } from 'src/global/entity/baseEntity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { BabyDevelopmentEntity } from './baby_development.entity';
import { OrganEntity } from 'src/organ/entities/organ.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'organ_development' })
export class OrganDevelopmentEntity extends BaseEntity {
  @ApiProperty({
    type: String,
    description: 'Development stage of the organ',
    example: 'Formation of the heart chambers',
  })
  @Column()
  development_stage: string;

  @ManyToOne(() => BabyDevelopmentEntity, {
    nullable: false,
    eager: true,
    onDelete: 'CASCADE',
  })
  baby_development: BabyDevelopmentEntity;

  @ApiProperty({
    type: OrganEntity,
    description: 'Organ associated with the development stage',
  })
  @ManyToOne(() => OrganEntity, {
    nullable: false,
    eager: true,
    onDelete: 'CASCADE',
  })
  organ: OrganEntity;
}
