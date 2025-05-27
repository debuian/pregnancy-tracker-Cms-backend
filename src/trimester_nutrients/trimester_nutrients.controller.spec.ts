import { Test, TestingModule } from '@nestjs/testing';
import { TrimesterNutrientsController } from './trimester_nutrients.controller';
import { TrimesterNutrientsService } from './trimester_nutrients.service';

describe('TrimesterNutrientsController', () => {
  let controller: TrimesterNutrientsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrimesterNutrientsController],
      providers: [TrimesterNutrientsService],
    }).compile();

    controller = module.get<TrimesterNutrientsController>(TrimesterNutrientsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
