import { Module } from '@nestjs/common';
import { NutrientsService } from './nutrients.service';
import { NutrientsController } from './nutrients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NutrientEntity } from './entities/nutrient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NutrientEntity])],
  controllers: [NutrientsController],
  providers: [NutrientsService],
  exports: [NutrientsService],
})
export class NutrientsModule {}
