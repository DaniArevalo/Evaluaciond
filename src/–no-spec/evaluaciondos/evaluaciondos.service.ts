import { Injectable } from '@nestjs/common';
import { CreateEvaluaciondoDto } from './dto/create-evaluaciondo.dto';
import { UpdateEvaluaciondoDto } from './dto/update-evaluaciondo.dto';

@Injectable()
export class EvaluaciondosService {
  create(createEvaluaciondoDto: CreateEvaluaciondoDto) {
    return 'This action adds a new evaluaciondo';
  }

  findAll() {
    return `This action returns all evaluaciondos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} evaluaciondo`;
  }

  update(id: number, updateEvaluaciondoDto: UpdateEvaluaciondoDto) {
    return `This action updates a #${id} evaluaciondo`;
  }

  remove(id: number) {
    return `This action removes a #${id} evaluaciondo`;
  }
}
