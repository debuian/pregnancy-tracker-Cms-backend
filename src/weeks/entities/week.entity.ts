import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/global/entity/baseEntity';
import { TrimesterExamples } from 'src/trimesters/dto/trimester.examples';
import { TrimesterEntity } from 'src/trimesters/entities/trimester.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity({ name: 'weeks' })
export class WeekEntity extends BaseEntity {
  @ApiProperty({
    example: 1,
    description: 'The unique identifier for the week',
    required: true,
  })
  @Column({ name: 'week_number', type: 'int' })
  weekNumber: number;

  @ApiProperty({
    example: 'Week 1',
    description: 'The title of the week',
    required: true,
  })
  @Column()
  title: string;

  @ApiProperty({
    example: 'This is a summary of week 1.',
    description: 'A brief summary of the week',
    required: true,
  })
  @Column()
  summary: string;

  @ApiProperty({
    example: TrimesterExamples.DEFAULT.data,
    description: 'The ID of the trimester this week belongs to',
    required: true,
  })
  @ManyToOne(() => TrimesterEntity, { nullable: false, eager: true })
  trimester: TrimesterEntity;
}
