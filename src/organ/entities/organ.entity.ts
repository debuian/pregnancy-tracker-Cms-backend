import { BaseEntity } from 'src/global/entity/baseEntity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'organ' })
export class OrganEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;
}
