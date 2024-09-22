import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EvaluaciondosService } from './evaluaciondos.service';
import { CreateEvaluaciondoDto } from './dto/create-evaluaciondo.dto';
import { UpdateEvaluaciondoDto } from './dto/update-evaluaciondo.dto';

@Controller('evaluaciondos')
export class EvaluaciondosController {
  constructor(private readonly evaluaciondosService: EvaluaciondosService) {}

  @Post()
  create(@Body() createEvaluaciondoDto: CreateEvaluaciondoDto) {
    return this.evaluaciondosService.create(createEvaluaciondoDto);
  }

  @Get()
  findAll() {
    return this.evaluaciondosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.evaluaciondosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEvaluaciondoDto: UpdateEvaluaciondoDto) {
    return this.evaluaciondosService.update(+id, updateEvaluaciondoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.evaluaciondosService.remove(+id);
  }
}
