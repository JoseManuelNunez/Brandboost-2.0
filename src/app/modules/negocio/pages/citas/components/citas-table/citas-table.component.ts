import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Cita {
  cliente: string;
  servicio: string;
  fechaHora: string;
  precio: string;
  estado: 'Verificado' | 'Cancelada' | 'Pendiente';
}

@Component({
  selector: 'app-citas-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './citas-table.component.html',
  styleUrl: './citas-table.component.css'
})
export class CitasTableComponent {
  @Input() title: string = 'Ordenes agendadas';
  @Input() appointments: Cita[] = [];

  getStatusClass(estado: string): string {
    switch (estado.toLowerCase()) {
      case 'verificado':
        return 'status-verified';
      case 'cancelada':
        return 'status-cancelled';
      case 'pendiente':
        return 'status-pending';
      default:
        return '';
    }
  }
}
