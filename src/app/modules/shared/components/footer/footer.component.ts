import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  public contactDetails: any;
  public currentYear: number;
  constructor(private sharedService: SharedService) {
    this.contactDetails = this.sharedService.getContactDetails();
  }
  ngOnInit(): void {
    this.updateYear();
  }
  top(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  updateYear(): void {
    const date = new Date();
    this.currentYear = date.getFullYear();
  }

}