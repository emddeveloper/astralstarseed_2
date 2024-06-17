import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scientific-logo-design',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scientific-logo-design.component.html',
  styleUrl: './scientific-logo-design.component.scss'
})
export class ScientificLogoDesignComponent {
  public contactDetails : any;
  constructor(private sharedService : SharedService){
   this.contactDetails = this.sharedService.getContactDetails();
  }
}
