import { Component, inject, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  private authService = inject(AuthService);

  // Inputs/Outputs if needed, but for now it can directly use AuthService
  currentUser = this.authService.currentUser;

  onCloseMenu = output();

  logout() {
    this.authService.logout();
    this.onCloseMenu.emit();
  }

  get initial(): string {
    return this.currentUser()?.nombre?.charAt(0).toUpperCase() || '?';
  }

  get avatarColor(): string {
    const name = this.currentUser()?.nombre || '';
    const colors = [
      '#7c3aed', '#db2777', '#2563eb', '#059669', '#d97706',
      '#dc2626', '#4f46e5', '#9333ea', '#0891b2', '#16a34a'
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  }
}
