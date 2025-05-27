import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/global/entity/baseEntity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'nutrient' })
export class NutrientEntity extends BaseEntity {
  @ApiProperty({
    example: 'Vitamin C',
    description: 'Name of the nutrient',
    type: String,
  })
  @Column()
  name: string;

  @ApiProperty({
    example:
      'Vitamin C is a water-soluble vitamin that is important for the growth and repair of tissues in the body.',
    description: 'Description of the nutrient',
    type: String,
  })
  @Column()
  description: string;

  @ApiProperty({
    example: 'ascorbic acid',
    description: 'Chemical formula of the nutrient',
    type: String,
  })
  @Column()
  food_source: string;

  @ApiProperty({
    example: 'water-soluble',
    description: 'Category of the nutrient',
    type: String,
  })
  @Column()
  category: string;
}
