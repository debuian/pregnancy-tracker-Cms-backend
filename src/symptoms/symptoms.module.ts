import { Module } from '@nestjs/common';
import { SymptomsService } from './symptoms.service';
import { SymptomsController } from './symptoms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SymptomEntity } from './entities/symptom.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SymptomEntity])],
  controllers: [SymptomsController],
  providers: [SymptomsService],
  exports: [SymptomsService],
})
export class SymptomsModule {}
