import { Component } from '@angular/core';
import { MesResultados } from './components/mes-resultados/mes-resultados';
import { ActividadReciente } from './components/actividad-reciente/actividad-reciente';
import { Kpis } from './components/kpis/kpis';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MesResultados, ActividadReciente, Kpis],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent { }
