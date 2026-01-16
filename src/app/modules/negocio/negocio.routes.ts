import { Routes } from '@angular/router';
import { NegocioLayoutComponent } from './layouts/negocio-layout/negocio-layout.component';
import { InicioComponent } from './pages/inicio/inicio.component';

import { CitasComponent } from './pages/citas/citas.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { NominasComponent } from './pages/nominas/nominas.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { WhatsappComponent } from './pages/whatsapp/whatsapp.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';

export const negocioRoutes: Routes = [
  {
    path: '',
    component: NegocioLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: InicioComponent
      },
      {
        path: 'citas',
        component: CitasComponent
      },
      {
        path: 'clientes',
        component: ClientesComponent
      },
      {
        path: 'servicios',
        component: ServiciosComponent
      },
      {
        path: 'empleados',
        component: EmpleadosComponent
      },
      {
        path: 'nominas',
        component: NominasComponent
      },
      {
        path: 'ventas',
        component: VentasComponent
      },
      {
        path: 'whatsapp',
        component: WhatsappComponent
      },
      {
        path: 'configuracion',
        component: ConfiguracionComponent
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
];
