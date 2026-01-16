import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomSidebarComponent } from '../../components/custom-sidebar/custom-sidebar.component';
import { CustomHeader } from '../../components/custom-header/custom-header';

@Component({
  selector: 'app-negocio-layout',
  standalone: true,
  imports: [RouterOutlet, CustomSidebarComponent, CustomHeader],
  templateUrl: './negocio-layout.component.html',
  styleUrl: './negocio-layout.component.css'
})
export class NegocioLayoutComponent { }
