import { Module } from '@nestjs/common';
import { BabyDevelopmentService } from './baby_development.service';
import { BabyDevelopmentController } from './baby_development.controller';
import { WeeksModule } from 'src/weeks/weeks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BabyDevelopmentEntity } from './entities/baby_development.entity';
import { OrganModule } from 'src/organ/organ.module';
import { OrganDevelopmentEntity } from './entities/organ_development.entity';
import { BabyMediaEntity } from './entities/baby_media.entity';

@Module({
  imports: [
    WeeksModule,
    OrganModule,
    TypeOrmModule.forFeature([
      BabyDevelopmentEntity,
      OrganDevelopmentEntity,
      BabyMediaEntity,
    ]),
  ],
  controllers: [BabyDevelopmentController],
  providers: [BabyDevelopmentService],
  exports: [BabyDevelopmentService],
})
export class BabyDevelopmentModule {}
