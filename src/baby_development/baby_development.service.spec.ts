import { Test, TestingModule } from '@nestjs/testing';
import { BabyDevelopmentService } from './baby_development.service';

describe('BabyDevelopmentService', () => {
  let service: BabyDevelopmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BabyDevelopmentService],
    }).compile();

    service = module.get<BabyDevelopmentService>(BabyDevelopmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
