import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { ServicesComponent } from './pages/services/services.component';

export const landingRoutes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  }
];
