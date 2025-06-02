import { BaseEntity } from 'src/global/entity/baseEntity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'trimesters' })
export class TrimesterEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  abbreviation: string;

  @Column()
  description: string;
}
