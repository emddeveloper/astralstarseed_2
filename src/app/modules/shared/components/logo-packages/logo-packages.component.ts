import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo-packages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo-packages.component.html',
  styleUrl: './logo-packages.component.scss'
})
export class LogoPackagesComponent {
  public contactDetails : any;
  constructor(private sharedService : SharedService){
   this.contactDetails = this.sharedService.getContactDetails();
  }
}
