import { Test, TestingModule } from '@nestjs/testing';
import { MotherDevelopmentService } from './mother_development.service';

describe('MotherDevelopmentService', () => {
  let service: MotherDevelopmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MotherDevelopmentService],
    }).compile();

    service = module.get<MotherDevelopmentService>(MotherDevelopmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
