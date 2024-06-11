import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public contactDetails : any;
 constructor(private sharedService : SharedService){
  this.contactDetails = this.sharedService.getContactDetails();
 }
}
