import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signature-analysis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signature-analysis.component.html',
  styleUrl: './signature-analysis.component.scss'
})
export class SignatureAnalysisComponent {
  public contactDetails : any;
  constructor(private sharedService : SharedService){
   this.contactDetails = this.sharedService.getContactDetails();
  }
}
