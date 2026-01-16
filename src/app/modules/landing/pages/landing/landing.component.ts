import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { OrganizaComponent } from '../../components/organiza/organiza.component';
import { BrandboostInfoComponent } from '../../components/brandboost-info/brandboost-info.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-landing',
  imports: [HeroComponent, OrganizaComponent, BrandboostInfoComponent, FooterComponent],
  templateUrl: './landing.component.html',
  styles: ``
})
export class LandingComponent {

}
