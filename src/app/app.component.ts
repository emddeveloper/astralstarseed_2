import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DashboardComponent } from './modules/shared/components/dashboard/dashboard.component';
import { HeaderComponent } from './modules/shared/components/header/header.component';
import { FooterComponent } from './modules/shared/components/footer/footer.component';
import { TestimonialComponent } from './modules/shared/components/testimonial/testimonial.component';
import { QueryFormComponent } from './modules/shared/components/query-form/query-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    CommonModule, 
    RouterModule, 
    DashboardComponent,
    HeaderComponent, 
    FooterComponent, 
    TestimonialComponent,
    QueryFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'astralstarseed';
}
