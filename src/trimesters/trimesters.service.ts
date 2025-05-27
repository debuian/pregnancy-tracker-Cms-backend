import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTrimesterDto } from './dto/create-trimester.dto';
import { UpdateTrimesterDto } from './dto/update-trimester.dto';
import { TrimesterEntity } from './entities/trimester.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TrimestersService {
  constructor(
    @InjectRepository(TrimesterEntity)
    private readonly trimesterRepository: Repository<TrimesterEntity>,
  ) {}
  create(createTrimesterDto: CreateTrimesterDto) {
    const trimester = this.trimesterRepository.create(createTrimesterDto);
    return this.trimesterRepository.save(trimester);
  }

  findAll() {
    return this.trimesterRepository.find();
  }

  async findOne(id: number) {
    const trimester = await this.trimesterRepository.findOne({ where: { id } });
    if (!trimester) {
      throw new NotFoundException(`Trimester with id ${id} not found`);
    }
    return trimester;
  }

  async update(id: number, updateTrimesterDto: UpdateTrimesterDto) {
    const trimester = await this.findOne(id);
    this.trimesterRepository.merge(trimester, updateTrimesterDto);
    return this.trimesterRepository.save(trimester);
  }

  async remove(id: number) {
    const trimester = await this.findOne(id);
    const result = await this.trimesterRepository.delete(trimester);
    return result;
  }
}
