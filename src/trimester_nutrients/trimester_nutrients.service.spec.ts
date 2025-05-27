import { Test, TestingModule } from '@nestjs/testing';
import { TrimesterNutrientsService } from './trimester_nutrients.service';

describe('TrimesterNutrientsService', () => {
  let service: TrimesterNutrientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrimesterNutrientsService],
    }).compile();

    service = module.get<TrimesterNutrientsService>(TrimesterNutrientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
