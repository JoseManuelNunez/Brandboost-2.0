import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-actividad-item',
  standalone: true,
  imports: [],
  templateUrl: './actividad-item.html',
  styleUrl: './actividad-item.css',
})
export class ActividadItem {
  @Input() activity: any;
}
