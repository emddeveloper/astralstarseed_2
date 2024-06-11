import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-numerology',
  standalone: true,
  imports: [],
  templateUrl: './numerology.component.html',
  styleUrl: './numerology.component.scss'
})
export class NumerologyComponent {
  public contactDetails : any;
  constructor(private sharedService : SharedService){
   this.contactDetails = this.sharedService.getContactDetails();
  }
}
