import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWeekDto } from './dto/create-week.dto';
import { UpdateWeekDto } from './dto/update-week.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TrimestersService } from 'src/trimesters/trimesters.service';
import { WeekEntity } from './entities/week.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WeeksService {
  constructor(
    @InjectRepository(WeekEntity)
    private readonly weekRepository: Repository<WeekEntity>,
    private readonly trimesterService: TrimestersService,
  ) {}
  async create(createWeekDto: CreateWeekDto) {
    const { trimesterId, ...weekData } = createWeekDto;
    const trimester = await this.trimesterService.findOne(trimesterId);
    const week = this.weekRepository.create(weekData);
    week.trimester = trimester;
    return this.weekRepository.save(week);
  }

  async findAll() {
    return this.weekRepository.find({
      relations: {
        trimester: true,
      },
    });
  }

  async findOne(id: number) {
    const week = await this.weekRepository.findOne({
      where: { id },
    });
    if (!week) {
      throw new NotFoundException(`Week with id ${id} not found`);
    }
    return week;
  }

  async update(id: number, updateWeekDto: UpdateWeekDto) {
    const week = await this.findOne(id);
    const { trimesterId, ...weekData } = updateWeekDto;
    if (trimesterId && trimesterId !== week.trimester.id) {
      const trimester = await this.trimesterService.findOne(trimesterId);
      week.trimester = trimester;
    }
    this.weekRepository.merge(week, weekData);
    return this.weekRepository.save(week);
  }

  async remove(id: number) {
    const week = await this.findOne(id);
    return this.weekRepository.delete(id);
  }
}
