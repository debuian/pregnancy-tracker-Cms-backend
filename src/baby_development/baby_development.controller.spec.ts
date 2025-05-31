import { Test, TestingModule } from '@nestjs/testing';
import { BabyDevelopmentController } from './baby_development.controller';
import { BabyDevelopmentService } from './baby_development.service';

describe('BabyDevelopmentController', () => {
  let controller: BabyDevelopmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BabyDevelopmentController],
      providers: [BabyDevelopmentService],
    }).compile();

    controller = module.get<BabyDevelopmentController>(
      BabyDevelopmentController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
