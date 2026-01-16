import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-header',
  standalone: true,
  imports: [],
  templateUrl: './custom-header.html',
  styleUrl: './custom-header.css',
})
export class CustomHeader {
  @Output() menuClick = new EventEmitter<void>();

  onMenuClick() {
    this.menuClick.emit();
  }
}
