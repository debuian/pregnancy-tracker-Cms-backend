import { Module } from '@nestjs/common';
import { WeeksService } from './weeks.service';
import { WeeksController } from './weeks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeekEntity } from './entities/week.entity';
import { TrimestersModule } from 'src/trimesters/trimesters.module';

@Module({
  imports: [TypeOrmModule.forFeature([WeekEntity]), TrimestersModule],
  controllers: [WeeksController],
  providers: [WeeksService],
  exports: [WeeksService],
})
export class WeeksModule {}
