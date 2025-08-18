import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent implements OnInit {
  testimonialData: any = { data: [] };

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get('assets/testimonial.json').subscribe((data: any) => {
      this.testimonialData = data;
    });
  }

  goToTestimonials() {
    this.router.navigate(['/testimonials']).then(() => {
      setTimeout(() => {
        window.scrollTo({ top: 100, behavior: 'smooth' });
      }, 100);
    });
  }
}
