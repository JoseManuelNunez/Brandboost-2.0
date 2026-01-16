import { Component } from '@angular/core';

@Component({
  selector: 'app-kpis',
  standalone: true,
  imports: [],
  templateUrl: './kpis.html',
  styleUrl: './kpis.css',
})
export class Kpis {
  kpiData = {
    inversion: {
      label: 'Inversión',
      value: 'DOP $670,720'
    },
    consumo: {
      label: 'Consumo',
      value: 'DOP $335,360',
      percentage: 50,
      trend: 'down'
    },
    ganancias: {
      label: 'Ganancias',
      value: 'DOP $1,845,720',
      percentage: 92,
      trend: 'up'
    }
  };
}
