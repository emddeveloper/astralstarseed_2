import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-face-reading-samudrik-shastra',
  standalone: true,
  imports: [],
  templateUrl: './face-reading-samudrik-shastra.component.html',
  styleUrl: './face-reading-samudrik-shastra.component.scss'
})
export class FaceReadingSamudrikShastraComponent {

  public contactDetails : any;
  constructor(private sharedService : SharedService){
   this.contactDetails = this.sharedService.getContactDetails();
  }
}
