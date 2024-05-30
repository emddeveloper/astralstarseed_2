import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterModule,CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  email1="astralstarseed@gmail.com";
  email2="sanjukta.tarot.mail@gmail.com";
  mobile1="+918420347137";
  mobile2="+918420347137";
  whatsapp1="+918420347137";
  sessionResponse : any ={
    mailsent:false,
    error:false,
    msg:"",  
  }

  myForm: FormGroup;
  isSubmitted = false;
  loader: boolean;
  constructor(private fb: FormBuilder, private sharedService : SharedService) {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]]
    });
  }

  booksession() {
    if (this.myForm.valid) {
      this.sharedService.bookSession(this.myForm.value.email,this.myForm.value.phone).subscribe({
        next : (response ) => {
          this.sessionResponse = response;
          console.log(response);
          this.loader = false; // Hide loader after successful response
        },
        error : (error) => {
          this.sessionResponse = error;
          console.log(error);
          this.loader = false; // Hide loader after error
        },
        complete: () => {
          // Handle completion cases
          this.loader = false; // Hide loader after error
        }
      });;
      console.log('Form submitted!', this.myForm.value);
      this.isSubmitted = true;
    }
  }

}
