import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  private router = inject(Router);

  navegarLogin() {
    this.router.navigate(['/auth/login']);
  }

  navegarInicio() {
    this.router.navigate(['/']);
  }
}
