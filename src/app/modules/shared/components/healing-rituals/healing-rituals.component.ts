import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-healing-rituals',
  standalone: true,
  imports: [],
  templateUrl: './healing-rituals.component.html',
  styleUrl: './healing-rituals.component.scss'
})
export class HealingRitualsComponent {

  public contactDetails : any;
  constructor(private sharedService : SharedService){
   this.contactDetails = this.sharedService.getContactDetails();
  }
}
