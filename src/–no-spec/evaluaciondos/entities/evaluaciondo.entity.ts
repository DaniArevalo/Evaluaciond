export class Evaluaciondo {}
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('clientes')  // Cambia 'clientes' por el nombre que prefieras para la tabla
export class Evaluaciondos {
  @PrimaryGeneratedColumn('uuid')
  id: string;  // Campo id único generado con uuid v4

  @Column({ type: 'text', nullable: false })
  nombre: string;  // Campo nombre, obligatorio

  @Column({ type: 'text', unique: true, nullable: false })
  correo_electronico: string;  // Campo correo electrónico, único y obligatorio

  @Column({ type: 'text', nullable: true })
  telefono: string;  // Campo teléfono, opcional

  @Column({ type: 'text', nullable: true })
  direccion: string;  // Campo dirección, opcional

  @Column({ type: 'text', nullable: true })
  estado_cliente: string;  // Campo estado del cliente, opcional
}

