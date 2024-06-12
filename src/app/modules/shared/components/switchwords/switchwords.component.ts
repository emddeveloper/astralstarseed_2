import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-switchwords',
  standalone: true,
  imports: [],
  templateUrl: './switchwords.component.html',
  styleUrl: './switchwords.component.scss'
})
export class SwitchwordsComponent {

  public contactDetails : any;
  constructor(private sharedService : SharedService){
   this.contactDetails = this.sharedService.getContactDetails();
  }
}
