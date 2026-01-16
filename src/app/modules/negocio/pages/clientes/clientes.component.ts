import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesTableComponent, Cliente } from './components/clientes-table/clientes-table.component';
import { DetallesClienteComponent } from './components/detalles-cliente/detalles-cliente.component';
import { NuevoClienteComponent } from './components/nuevo-cliente/nuevo-cliente.component';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, ClientesTableComponent, DetallesClienteComponent, NuevoClienteComponent],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  clientes: Cliente[] = [
    {
      id: 1,
      nombre: 'Lucia Gomez',
      email: 'luciag35@gmail.com',
      telefono: '(829) 123-4567',
      direccion: 'Urbanización Las Carolinas, Calle #4, La Vega',
      nivel: 'Verificado',
      fechaRegistro: '2/01/2025',
      descripcion: '-',
      tipo: 'Cliente Potencial',
      ventas: 7,
      ordenes: 7,
      pagado: 'DOP $6,500'
    },
    {
      id: 2,
      nombre: 'Juan Perez',
      email: 'juanp@gmail.com',
      telefono: '(809) 555-0199',
      direccion: 'Calle Principal #10, Santiago',
      nivel: 'Verificado',
      fechaRegistro: '3/01/2025',
      descripcion: 'Cliente frecuente',
      tipo: 'VIP',
      ventas: 15,
      ordenes: 12,
      pagado: 'DOP $12,300'
    },
    {
      id: 3,
      nombre: 'Maria Rodriguez',
      email: 'mrodriguez@hotmail.com',
      telefono: '(849) 222-3344',
      direccion: 'Av. Enriquillo, Res. Altagracia, Santo Domingo',
      nivel: 'Verificado',
      fechaRegistro: '5/01/2025',
      descripcion: 'Interesada en nuevos servicios',
      tipo: 'Cliente Potencial',
      ventas: 3,
      ordenes: 2,
      pagado: 'DOP $2,100'
    },
    {
      id: 4,
      nombre: 'Carlos Martinez',
      email: 'carlosm@outlook.com',
      telefono: '(829) 444-5566',
      direccion: 'Calle Las Flores #5, Puerto Plata',
      nivel: 'Pendiente',
      fechaRegistro: '10/01/2025',
      descripcion: 'Primer contacto vía web',
      tipo: 'Nuevo Prospecto',
      ventas: 0,
      ordenes: 1,
      pagado: 'DOP $0'
    },
    {
      id: 5,
      nombre: 'Ana Beltré',
      email: 'ana.beltre@gmail.com',
      telefono: '(809) 888-9900',
      direccion: 'Urb. Real, Manzana B, San Francisco de Macorís',
      nivel: 'Verificado',
      fechaRegistro: '12/01/2025',
      descripcion: 'Referida por Juan Perez',
      tipo: 'Fiel',
      ventas: 22,
      ordenes: 20,
      pagado: 'DOP $18,900'
    },
    {
      id: 6,
      nombre: 'Pedro Sanchez',
      email: 'psanchez@info.do',
      telefono: '(829) 111-2233',
      direccion: 'Calle Duarte #45, Moca',
      nivel: 'Verificado',
      fechaRegistro: '14/01/2025',
      descripcion: '-',
      tipo: 'Cliente Potencial',
      ventas: 5,
      ordenes: 4,
      pagado: 'DOP $4,200'
    }
  ];

  clienteSeleccionado: Cliente = this.clientes[0];

  onClienteSelected(cliente: Cliente) {
    this.clienteSeleccionado = cliente;
  }
}
