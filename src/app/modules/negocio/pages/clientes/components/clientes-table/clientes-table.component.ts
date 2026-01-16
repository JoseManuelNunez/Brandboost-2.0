import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Cliente {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  direccion: string;
  nivel: string;
  fechaRegistro: string;
  descripcion: string;
  tipo: string;
  ventas: number;
  ordenes: number;
  pagado: string;
}

@Component({
  selector: 'app-clientes-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes-table.component.html',
  styleUrl: './clientes-table.component.css'
})
export class ClientesTableComponent {
  @Input() clientes: Cliente[] = [];
  @Output() select = new EventEmitter<Cliente>();

  onRowClick(cliente: Cliente) {
    this.select.emit(cliente);
  }
}
