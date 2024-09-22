import { PartialType } from '@nestjs/mapped-types';
import { CreateEvaluaciondoDto } from './create-evaluaciondo.dto';

export class UpdateEvaluaciondoDto extends PartialType(CreateEvaluaciondoDto) {}
