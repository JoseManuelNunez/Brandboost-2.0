import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Service {
  nombre: string;
  categoria: string;
  duracion: string;
  precio: string;
  estado: 'Activo' | 'Inactivo';
}

@Component({
  selector: 'app-servicios-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios-table.component.html',
  styleUrl: './servicios-table.component.css'
})
export class ServiciosTableComponent {
  @Input() title: string = 'Gestiona tus servicios';
  @Input() services: Service[] = [];

  getStatusClass(estado: string): string {
    return estado.toLowerCase() === 'activo' ? 'status-active' : 'status-inactive';
  }
}
