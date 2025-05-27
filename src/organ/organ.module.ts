import { Module } from '@nestjs/common';
import { OrganService } from './organ.service';
import { OrganController } from './organ.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganEntity } from './entities/organ.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrganEntity])],
  controllers: [OrganController],
  providers: [OrganService],
  exports: [OrganService],
})
export class OrganModule {}
