import { Test, TestingModule } from '@nestjs/testing';
import { NutrientsController } from './nutrients.controller';
import { NutrientsService } from './nutrients.service';

describe('NutrientsController', () => {
  let controller: NutrientsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NutrientsController],
      providers: [NutrientsService],
    }).compile();

    controller = module.get<NutrientsController>(NutrientsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
