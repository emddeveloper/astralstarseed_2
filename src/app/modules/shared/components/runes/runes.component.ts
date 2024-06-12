import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-runes',
  standalone: true,
  imports: [],
  templateUrl: './runes.component.html',
  styleUrl: './runes.component.scss'
})
export class RunesComponent {

  public contactDetails : any;
  constructor(private sharedService : SharedService){
   this.contactDetails = this.sharedService.getContactDetails();
  }
}
