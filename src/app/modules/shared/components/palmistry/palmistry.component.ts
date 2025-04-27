import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-palmistry',
  standalone: true,
  imports: [],
  templateUrl: './palmistry.component.html',
  styleUrl: './palmistry.component.scss'
})
export class PalmistryComponent {

  public contactDetails : any;
  constructor(private sharedService : SharedService){
   this.contactDetails = this.sharedService.getContactDetails();
  }
}
