import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosTableComponent, Service } from './components/servicios-table/servicios-table.component';
import { NuevoServicio } from './components/nuevo-servicio/nuevo-servicio';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, ServiciosTableComponent, NuevoServicio],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  services: Service[] = [
    { nombre: 'Pizza de Pepperoni - Mediana', categoria: 'PIZZA', duracion: '30 MIN', precio: '$700.00', estado: 'Activo' },
    { nombre: 'Pizza de Pepperoni - Mediana', categoria: 'PIZZA', duracion: '30 MIN', precio: '$700.00', estado: 'Activo' },
    { nombre: 'Pizza de Pepperoni - Mediana', categoria: 'PIZZA', duracion: '30 MIN', precio: '$700.00', estado: 'Activo' },
    { nombre: 'Pizza de Pepperoni - Mediana', categoria: 'PIZZA', duracion: '30 MIN', precio: '$700.00', estado: 'Activo' },
    { nombre: 'Pizza de Pepperoni - Mediana', categoria: 'PIZZA', duracion: '30 MIN', precio: '$700.00', estado: 'Activo' },
    { nombre: 'Pizza de Pepperoni - Mediana', categoria: 'PIZZA', duracion: '30 MIN', precio: '$700.00', estado: 'Activo' },
  ];
}
