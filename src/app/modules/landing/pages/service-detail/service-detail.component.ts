import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SERVICES, Service } from '../../data/services.data';
import { ViewportScroller } from '@angular/common';

import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, FooterComponent, HeaderComponent],
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private location = inject(Location); // Inject Location to go back
  private viewportScroller = inject(ViewportScroller);

  service: Service | undefined;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.service = SERVICES.find(s => s.id === id);
        if (!this.service) {
          // If service not found, redirect to services list
          this.router.navigate(['/services']);
        }
      }
    });

    // Scroll to top on navigation
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  goBack() {
    this.location.back();
  }
}
