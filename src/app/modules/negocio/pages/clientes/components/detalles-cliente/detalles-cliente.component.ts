import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cliente } from '../clientes-table/clientes-table.component';

@Component({
  selector: 'app-detalles-cliente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalles-cliente.component.html',
  styleUrl: './detalles-cliente.component.css'
})
export class DetallesClienteComponent {
  @Input() cliente?: Cliente;
}
