import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-tarot',
  standalone: true,
  imports: [],
  templateUrl: './tarot.component.html',
  styleUrl: './tarot.component.scss'
})
export class TarotComponent {

  public contactDetails : any;
  constructor(private sharedService : SharedService){
   this.contactDetails = this.sharedService.getContactDetails();
  }
}
