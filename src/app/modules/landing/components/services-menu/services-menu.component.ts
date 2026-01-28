import { Component, OnDestroy, OnInit, inject, NgZone, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface CarouselItem {
  img: string;
  url: string;
  name: string;
}

@Component({
  selector: 'app-services-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services-menu.component.html',
  styleUrls: ['./services-menu.css']
})
export class ServicesMenuComponent implements OnInit, OnDestroy, AfterViewInit {
  private ngZone = inject(NgZone);
  private cdr = inject(ChangeDetectorRef);

  carouselItems: CarouselItem[] = [
    {
      name: 'Bosques Del Pino',
      img: '/assets/cosas/bg-contactar.webp',
      url: 'https://bosquesdelpino.com/'
    },
    {
      name: 'Desarrollo de Web Apps',
      img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80',
      url: '/#'
    },
    {
      name: 'Diseño UX/UI Avanzado',
      img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
      url: '/#'
    }
  ];

  currentIndex = 0;
  private intervalId: any;

  ngOnInit() {
    // Moved to AfterViewInit
  }

  ngAfterViewInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.stopAutoPlay();

    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => {
          this.nextSlide(false);
          this.cdr.markForCheck();
        });
      }, 3000);
    });
  }

  stopAutoPlay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  nextSlide(manual = true) {
    this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
    if (manual) {
      this.resetAutoPlay();
    }
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
    this.resetAutoPlay();
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.resetAutoPlay();
  }

  resetAutoPlay() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}
