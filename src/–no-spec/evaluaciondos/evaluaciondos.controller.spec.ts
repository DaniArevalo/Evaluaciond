import { Test, TestingModule } from '@nestjs/testing';
import { EvaluaciondosController } from './evaluaciondos.controller';
import { EvaluaciondosService } from './evaluaciondos.service';

describe('EvaluaciondosController', () => {
  let controller: EvaluaciondosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EvaluaciondosController],
      providers: [EvaluaciondosService],
    }).compile();

    controller = module.get<EvaluaciondosController>(EvaluaciondosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
