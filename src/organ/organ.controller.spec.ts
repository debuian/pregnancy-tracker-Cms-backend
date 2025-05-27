import { Test, TestingModule } from '@nestjs/testing';
import { OrganController } from './organ.controller';
import { OrganService } from './organ.service';

describe('OrganController', () => {
  let controller: OrganController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganController],
      providers: [OrganService],
    }).compile();

    controller = module.get<OrganController>(OrganController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
