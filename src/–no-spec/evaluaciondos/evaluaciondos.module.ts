import { Module } from '@nestjs/common';
import { EvaluaciondosService } from './evaluaciondos.service';
import { EvaluaciondosController } from './evaluaciondos.controller';

@Module({
  controllers: [EvaluaciondosController],
  providers: [EvaluaciondosService],
})
export class EvaluaciondosModule {}
