import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
  public contactDetails : any;
  constructor(private sharedService : SharedService){
   this.contactDetails = this.sharedService.getContactDetails();
  }
}
