import { Test, TestingModule } from '@nestjs/testing';
import { EvaluaciondosService } from './evaluaciondos.service';

describe('EvaluaciondosService', () => {
  let service: EvaluaciondosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EvaluaciondosService],
    }).compile();

    service = module.get<EvaluaciondosService>(EvaluaciondosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
