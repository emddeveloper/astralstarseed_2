import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-crystal-ball-gazing',
  standalone: true,
  imports: [],
  templateUrl: './crystal-ball-gazing.component.html',
  styleUrl: './crystal-ball-gazing.component.scss'
})
export class CrystalBallGazingComponent {

  public contactDetails : any;
  constructor(private sharedService : SharedService){
   this.contactDetails = this.sharedService.getContactDetails();
  }
}
