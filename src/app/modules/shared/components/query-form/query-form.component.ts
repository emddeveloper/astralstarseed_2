import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-query-form',
  standalone: true,
  imports:  [ CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './query-form.component.html',
  styleUrl: './query-form.component.scss'
})
export class QueryFormComponent implements OnInit {
  /*POST service starts form contact form */
  response = {
    "msg":"",
    "mailsent":false,
    "error":false
  };
  contactParams = {
    "name": null,
    "phone": null,
    "subject": null,
    "message": null,
    "email": null
  }
  email1 = "astralstarseed@gmail.com";
  email2 = "sanjukta.tarot.mail@gmail.com";
  mobile1 = "+918420347137";
  mobile2 = "+918420347137";
  whatsapp1 = "+918420347137";

  contactForm: FormGroup;
  sessionResponse: Object;
  loader: boolean;
  displayForm : boolean = true;

  constructor(private fb: FormBuilder , private sharedService : SharedService) { }
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      subject: [''],
      message: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.sharedService.contactUs(this.contactForm.value).subscribe({
        next : (response ) => {
          this.sessionResponse = response;
          console.log(response);
          this.loader = false; // Hide loader after successful response
          this.contactForm.reset();
          this.displayForm = false;
        },
        error : (error) => {
          this.sessionResponse = error;
          console.log(error);
          this.loader = false; // Hide loader after error
          this.displayForm = true;
        },
        complete: () => {
          // Handle completion cases
          this.loader = false; // Hide loader after error
          this.contactForm.reset();
        }
      });
      this.contactForm.reset();
      console.log(this.contactForm.value); // You can replace this with your desired action, like sending the form data to a server
    } else {
      // Mark all fields as touched to show validation messages
      this.contactForm.markAllAsTouched();
    }
  }

}
