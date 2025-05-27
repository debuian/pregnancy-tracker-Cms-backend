import { Test, TestingModule } from '@nestjs/testing';
import { MotherDevelopmentController } from './mother_development.controller';
import { MotherDevelopmentService } from './mother_development.service';

describe('MotherDevelopmentController', () => {
  let controller: MotherDevelopmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MotherDevelopmentController],
      providers: [MotherDevelopmentService],
    }).compile();

    controller = module.get<MotherDevelopmentController>(MotherDevelopmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
