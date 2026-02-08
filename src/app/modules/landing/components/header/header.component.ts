import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServicesMenuComponent } from '../services-menu/services-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ServicesMenuComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private router = inject(Router);
  isServicesMenuOpen = false;

  navegarLogin() {
    this.router.navigate(['/auth/login']);
  }

  navegarInicio() {
    this.router.navigate(['/']);
    this.isServicesMenuOpen = false;
  }

  toggleServicesMenu() {
    this.isServicesMenuOpen = !this.isServicesMenuOpen;
    if (this.isServicesMenuOpen) {
      this.isMobileMenuOpen = false;
    }
  }

  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      this.isServicesMenuOpen = false;
    }
  }

  services = [
    {
      title: 'Branding & Strategy',
      route: ['/services', 'branding'],
      svgPath: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
    },
    {
      title: 'Impulso de Redes Sociales',
      route: ['/services', 'social-media'],
      svgPath: 'M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
    },
    {
      title: 'SEO',
      route: ['/services', 'seo'],
      svgPath: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
    },
    {
      title: 'Producción Audiovisual',
      route: ['/services', 'audiovisual'],
      svgPath: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
    },
    {
      title: 'Campañas de Marketing',
      route: ['/services', 'marketing-campaigns'],
      svgPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
    },
    {
      title: 'Desarrollo de Web Apps',
      route: ['/services', 'web-apps'],
      svgPath: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    },
    {
      title: 'Desarrollo de Apps',
      route: ['/services', 'mobile-apps'],
      svgPath: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
    },
    {
      title: 'Sistema de Gestión de CRM',
      route: ['/services', 'crm'],
      svgPath: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
    },
    {
      title: 'Integración de IA',
      route: ['/services', 'ai-integration'],
      svgPath: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
    }
  ];
}
