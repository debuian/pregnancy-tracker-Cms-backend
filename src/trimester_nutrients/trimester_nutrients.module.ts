import { Module } from '@nestjs/common';
import { TrimesterNutrientsService } from './trimester_nutrients.service';
import { TrimesterNutrientsController } from './trimester_nutrients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrimesterNutrientEntity } from './entities/trimester_nutrient.entity';
import { TrimestersModule } from 'src/trimesters/trimesters.module';
import { NutrientsModule } from 'src/nutrients/nutrients.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([TrimesterNutrientEntity]),
    TrimestersModule,
    NutrientsModule,
  ],
  controllers: [TrimesterNutrientsController],
  providers: [TrimesterNutrientsService],
})
export class TrimesterNutrientsModule {}
