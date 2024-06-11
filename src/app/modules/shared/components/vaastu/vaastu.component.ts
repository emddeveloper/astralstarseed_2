import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-vaastu',
  standalone: true,
  imports: [],
  templateUrl: './vaastu.component.html',
  styleUrl: './vaastu.component.scss'
})
export class VaastuComponent {
  public contactDetails : any;
  constructor(private sharedService : SharedService){
   this.contactDetails = this.sharedService.getContactDetails();
  }
}
