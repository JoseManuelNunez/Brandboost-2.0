import { Component, Output, EventEmitter, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-header.html',
  styleUrl: './custom-header.css',
})
export class CustomHeader {
  @Input() showMenuButton = false;
  @Output() menuClick = new EventEmitter<void>();

  onMenuClick() {
    this.menuClick.emit();
  }
}
