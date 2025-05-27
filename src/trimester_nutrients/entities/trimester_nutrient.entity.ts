import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/global/entity/baseEntity';
import { NutrientEntity } from 'src/nutrients/entities/nutrient.entity';
import { TrimesterEntity } from 'src/trimesters/entities/trimester.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity({ name: 'trimester_nutrient' })
export class TrimesterNutrientEntity extends BaseEntity {
  @ApiProperty({
    type: () => TrimesterEntity,
    description: 'The trimester associated with this nutrient recommendation',
  })
  @ManyToOne(() => TrimesterEntity, { nullable: false, onDelete: 'CASCADE' })
  trimester: TrimesterEntity;

  @ApiProperty({
    type: () => NutrientEntity,
    description: 'The nutrient associated with this recommendation',
  })
  @ManyToOne(() => NutrientEntity, { nullable: false, onDelete: 'CASCADE' })
  nutrient: NutrientEntity;

  @ApiProperty({
    description: 'Recommendation for the nutrient during the trimester',
    example: 'Increase intake of folic acid to prevent neural tube defects.',
  })
  @Column()
  recommendation: string;

  @ApiProperty({
    description:
      'Daily amount of the nutrient recommended during the trimester',
    example: '400.00',
  })
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  daily_amount: string;
}
