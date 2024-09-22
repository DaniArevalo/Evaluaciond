import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { ProductsModule } from './–no-spec/products/products.module';
import { EvaluaciondosModule } from './–no-spec/evaluaciondos/evaluaciondos.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [CommonModule, ProductsModule, EvaluaciondosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
