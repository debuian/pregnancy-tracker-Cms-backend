import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrganDto } from './dto/create-organ.dto';
import { UpdateOrganDto } from './dto/update-organ.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrganEntity } from './entities/organ.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrganService {
  constructor(
    @InjectRepository(OrganEntity)
    private readonly OrganRepo: Repository<OrganEntity>,
  ) {}
  create(createOrganDto: CreateOrganDto) {
    const organ = this.OrganRepo.create(createOrganDto);
    return this.OrganRepo.save(organ);
  }

  findAll() {
    return this.OrganRepo.find();
  }

  async findOne(id: number) {
    const organ = await this.OrganRepo.findOne({
      where: { id },
    });
    if (!organ) {
      throw new NotFoundException(`Organ with id ${id} not found`);
    }
    return organ;
  }

  async update(id: number, updateOrganDto: UpdateOrganDto) {
    const organ = await this.findOne(id);
    const updated = this.OrganRepo.merge(organ, updateOrganDto);
    return this.OrganRepo.save(updated);
  }

  async remove(id: number) {
    const organ = await this.findOne(id);
    return this.OrganRepo.delete(id); // ✔️ correct
  }
}
