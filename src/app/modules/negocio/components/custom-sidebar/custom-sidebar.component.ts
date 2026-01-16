import { Component, inject, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MENU_ITEMS, BOTTOM_ITEMS, MenuItem } from '../../constants/menuItems';

@Component({
  selector: 'app-custom-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './custom-sidebar.component.html',
  styleUrl: './custom-sidebar.component.css'
})
export class CustomSidebarComponent {
  private sanitizer = inject(DomSanitizer);

  @Output() toggle = new EventEmitter<void>();

  menuItems: MenuItem[] = MENU_ITEMS;
  bottomItems: MenuItem[] = BOTTOM_ITEMS;

  toggleSidebar() {
    this.toggle.emit();
  }

  getSafeIcon(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }
}
