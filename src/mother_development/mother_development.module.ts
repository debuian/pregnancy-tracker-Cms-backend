import { Module } from '@nestjs/common';
import { MotherDevelopmentService } from './mother_development.service';
import { MotherDevelopmentController } from './mother_development.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MotherDevelopmentEntity } from './entities/mother_development.entity';
import { WeeksModule } from 'src/weeks/weeks.module';
import { SymptomsModule } from 'src/symptoms/symptoms.module';
import { MotherSymptomsEntity } from './entities/mother_symptoms.entity';
import { MotherMediaEntity } from './entities/mother_media.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MotherDevelopmentEntity,
      MotherSymptomsEntity,
      MotherMediaEntity,
    ]),
    WeeksModule,
    SymptomsModule,
  ],
  controllers: [MotherDevelopmentController],
  providers: [MotherDevelopmentService],
})
export class MotherDevelopmentModule {}
