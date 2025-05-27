import { Module } from '@nestjs/common';
import { TrimestersService } from './trimesters.service';
import { TrimestersController } from './trimesters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrimesterEntity } from './entities/trimester.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TrimesterEntity])],
  controllers: [TrimestersController],
  providers: [TrimestersService],
  exports: [TrimestersService],
})
export class TrimestersModule {}
