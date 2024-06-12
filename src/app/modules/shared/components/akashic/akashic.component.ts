import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-akashic',
  standalone: true,
  imports: [],
  templateUrl: './akashic.component.html',
  styleUrl: './akashic.component.scss'
})
export class AkashicComponent {
  public contactDetails : any;
  constructor(private sharedService : SharedService){
   this.contactDetails = this.sharedService.getContactDetails();
  }
}
