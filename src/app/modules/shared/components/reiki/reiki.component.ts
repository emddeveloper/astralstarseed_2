import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-reiki',
  standalone: true,
  imports: [],
  templateUrl: './reiki.component.html',
  styleUrl: './reiki.component.scss'
})
export class ReikiComponent {

  public contactDetails : any;
  constructor(private sharedService : SharedService){
   this.contactDetails = this.sharedService.getContactDetails();
  }
}
