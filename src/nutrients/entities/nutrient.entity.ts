import { BaseEntity } from 'src/global/entity/baseEntity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'nutrient' })
export class NutrientEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  food_source: string;

  @Column()
  category: string;
}
