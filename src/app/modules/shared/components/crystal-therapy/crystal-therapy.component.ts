import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-crystal-therapy',
  standalone: true,
  imports: [],
  templateUrl: './crystal-therapy.component.html',
  styleUrl: './crystal-therapy.component.scss'
})
export class CrystalTherapyComponent {

  public contactDetails : any;
  constructor(private sharedService : SharedService){
   this.contactDetails = this.sharedService.getContactDetails();
  }
}
