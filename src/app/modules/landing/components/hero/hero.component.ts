import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  title = "Trabaja mejor con BrandBoost";
  titleWords = this.title.split(' ').map(word => ({
    text: word,
    chars: word.split('')
  }));
}
