import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActividadItem } from './actividad-item/actividad-item';

@Component({
  selector: 'app-actividad-reciente',
  standalone: true,
  imports: [CommonModule, ActividadItem],
  templateUrl: './actividad-reciente.html',
  styleUrl: './actividad-reciente.css',
})
export class ActividadReciente {
  activities = [
    {
      clientName: 'Lucia Gomez',
      serviceName: 'Pizza de Pepperoni - Mediana',
      amount: '700.00',
      time: '2:04pm'
    },
    {
      clientName: 'Omar Dominguez',
      serviceName: 'Pizza de Jamon y Queso - Mediana',
      amount: '700.00',
      time: '1:57pm'
    },
    {
      clientName: 'Pedro Hernandez',
      serviceName: 'Pizza de Veggie - Mediana',
      amount: '700',
      time: '1:40pm'
    },
    {
      clientName: 'Reinaldo Perez',
      serviceName: 'Calzones - Mediana',
      amount: '400',
      time: '1:32pm'
    },
    {
      clientName: 'Fernanda Ruiz',
      serviceName: 'Pizza de Pepperoni - Grande',
      amount: '800',
      time: '1:25pm'
    },
    {
      clientName: 'Maria Machado',
      serviceName: 'Pizza de Pepperoni + 1 Ingrediente Adicional - Mediana',
      amount: '900',
      time: '1:09pm'
    }
  ];
}
