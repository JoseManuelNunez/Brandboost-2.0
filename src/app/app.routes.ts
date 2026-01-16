import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/landing/landing.routes').then(m => m.landingRoutes)
  },
  {
    path: 'negocio',
    loadChildren: () => import('./modules/negocio/negocio.routes').then(m => m.negocioRoutes)
  }
];
