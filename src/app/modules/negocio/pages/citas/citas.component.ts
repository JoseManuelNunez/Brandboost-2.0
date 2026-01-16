import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitasTableComponent, Cita } from './components/citas-table/citas-table.component';
import { AgendarCita } from './components/agendar-cita/agendar-cita';

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [CommonModule, CitasTableComponent, AgendarCita],
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.css'
})
export class CitasComponent {
  appointments: Cita[] = [
    { cliente: 'Lucia Gomez', servicio: 'Pizza de Pepperoni - Mediana', fechaHora: '2/01/2025 2:04 p.m.', precio: '$700.00', estado: 'Verificado' },
    { cliente: 'Lucia Gomez', servicio: 'Pizza de Pepperoni - Mediana', fechaHora: '2/01/2025 2:04 p.m.', precio: '$700.00', estado: 'Verificado' },
    { cliente: 'Lucia Gomez', servicio: 'Pizza de Pepperoni - Mediana', fechaHora: '2/01/2025 2:04 p.m.', precio: '$700.00', estado: 'Cancelada' },
    { cliente: 'Lucia Gomez', servicio: 'Pizza de Pepperoni - Mediana', fechaHora: '2/01/2025 2:04 p.m.', precio: '$700.00', estado: 'Verificado' },
    { cliente: 'Lucia Gomez', servicio: 'Pizza de Pepperoni - Mediana', fechaHora: '2/01/2025 2:04 p.m.', precio: '$700.00', estado: 'Verificado' },
    { cliente: 'Lucia Gomez', servicio: 'Pizza de Pepperoni - Mediana', fechaHora: '2/01/2025 2:04 p.m.', precio: '$700.00', estado: 'Verificado' },
    { cliente: 'Lucia Gomez', servicio: 'Pizza de Pepperoni - Mediana', fechaHora: '2/01/2025 2:04 p.m.', precio: '$700.00', estado: 'Verificado' },
    { cliente: 'Lucia Gomez', servicio: 'Pizza de Pepperoni - Mediana', fechaHora: '2/01/2025 2:04 p.m.', precio: '$700.00', estado: 'Verificado' },
  ];
}
