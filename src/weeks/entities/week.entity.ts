import { BaseEntity } from 'src/global/entity/baseEntity';
import { TrimesterEntity } from 'src/trimesters/entities/trimester.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity({ name: 'weeks' })
export class WeekEntity extends BaseEntity {
  @Column({ name: 'week_number', type: 'int' })
  weekNumber: number;

  @Column()
  title: string;

  @Column()
  summary: string;

  @ManyToOne(() => TrimesterEntity, { nullable: false, eager: true })
  trimester: TrimesterEntity;
}
