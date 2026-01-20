import { Routes } from '@angular/router';
import { authGuard } from './modules/auth/guards/auth.guard';
import { publicGuard } from './modules/auth/guards/public.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/landing/landing.routes').then(m => m.landingRoutes)
  },
  {
    path: 'negocio',
    canActivate: [authGuard],
    loadChildren: () => import('./modules/negocio/negocio.routes').then(m => m.negocioRoutes)
  },
  {
    path: 'auth',
    canActivate: [publicGuard],
    loadChildren: () => import('./modules/auth/auth.routes').then(m => m.authRoutes)
  }
];
