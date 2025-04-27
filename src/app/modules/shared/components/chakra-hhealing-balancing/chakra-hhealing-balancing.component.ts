import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-chakra-hhealing-balancing',
  standalone: true,
  imports: [],
  templateUrl: './chakra-hhealing-balancing.component.html',
  styleUrl: './chakra-hhealing-balancing.component.scss'
})
export class ChakraHhealingBalancingComponent {

  public contactDetails : any;
  constructor(private sharedService : SharedService){
   this.contactDetails = this.sharedService.getContactDetails();
  }
}
