import { Test, TestingModule } from '@nestjs/testing';
import { TrimestersController } from './trimesters.controller';
import { TrimestersService } from './trimesters.service';

describe('TrimestersController', () => {
  let controller: TrimestersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrimestersController],
      providers: [TrimestersService],
    }).compile();

    controller = module.get<TrimestersController>(TrimestersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
