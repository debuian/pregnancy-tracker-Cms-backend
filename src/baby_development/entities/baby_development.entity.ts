import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/global/entity/baseEntity';
import { WeekEntity } from 'src/weeks/entities/week.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity({ name: 'baby_development' })
export class BabyDevelopmentEntity extends BaseEntity {
  @ApiProperty({
    type: Number,
    description: 'The week of pregnancy this development record corresponds to',
    example: 12,
  })
  @Column({ type: 'decimal', precision: 6, scale: 2 })
  weight_kg: string; // safer and recommended to use string data type

  @ApiProperty({
    type: Number,
    description: 'The length of the baby in centimeters',
    example: 15.5,
  })
  @Column({ type: 'decimal', precision: 6, scale: 2 })
  length_cm: string;

  @ApiProperty({
    type: String,
    description: 'Milestones achieved during this week of development',
    example: 'Heartbeat is strong and detectable.',
  })
  @Column()
  milestones: string;

  @ApiProperty({
    type: String,
    description: 'Sensory development details for the baby',
    example: 'Eyes and ears are forming.',
  })
  @Column()
  sensory_development: string;

  @ApiProperty({
    type: WeekEntity,
  })
  @ManyToOne(() => WeekEntity, {
    nullable: false,
    eager: true,
    onDelete: 'CASCADE',
  })
  week: WeekEntity;
}
