import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-testimonials.component.html',
  styleUrl: './all-testimonials.component.scss'
})
export class AllTestimonialsComponent implements OnInit {
  testimonialData: any = { data: [] };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('assets/testimonial.json').subscribe((data: any) => {
      this.testimonialData = data;
    });
  }
}