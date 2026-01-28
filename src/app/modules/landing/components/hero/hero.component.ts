import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServicesMenuComponent } from '../services-menu/services-menu.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ServicesMenuComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
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
  }
}
