import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { ProductsModule } from './–no-spec/products/products.module';
import { EvaluaciondosModule } from './–no-spec/evaluaciondos/evaluaciondos.module';
import { ProductsModule } from './products/products.module';
import { ServicesModule } from './services/services.module';
import { ClientesModule } from './clientes/clientes.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [CommonModule, ProductsModule, EvaluaciondosModule, ServicesModule, ClientesModule, EmpleadosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
