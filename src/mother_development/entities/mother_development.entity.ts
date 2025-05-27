import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/global/entity/baseEntity';
import { WeekEntity } from 'src/weeks/entities/week.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity({ name: 'mother_development' })
export class MotherDevelopmentEntity extends BaseEntity {
  @ApiProperty({
    type: String,
    description:
      "Description of the mother's physical changes during this week",
    example: 'Increased breast tenderness, slight abdominal swelling.',
  })
  @Column()
  physical_changes: string;

  @ApiProperty({
    type: String,
    description:
      "Description of the mother's emotional changes during this week",
    example:
      'Estrogen and progesterone levels continue to rise, leading to fatigue and nausea.',
  })
  @Column()
  hormonal_changes: string;

  @ApiProperty({
    type: WeekEntity,
    description: 'The week of pregnancy this development record belongs to',
  })
  @ManyToOne(() => WeekEntity, {
    nullable: false,
    eager: true,
    onDelete: 'CASCADE',
  })
  week: WeekEntity;
}
