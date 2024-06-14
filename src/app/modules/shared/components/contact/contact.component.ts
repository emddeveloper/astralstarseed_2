import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from '../../services/shared.service';
import { QueryFormComponent } from '../query-form/query-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ CommonModule,ReactiveFormsModule,FormsModule,QueryFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  public contactDetails : any;
  constructor(private fb: FormBuilder, private sharedService : SharedService) {
    this.contactDetails = this.sharedService.getContactDetails();
   }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: [null, Validators.required],
      phone: [null, Validators.required],
      subject: [null, Validators.required],
      message: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value); // You can replace this with your desired action, like sending the form data to a server
    } else {
      // Mark all fields as touched to show validation messages
      this.contactForm.markAllAsTouched();
    }
  }
}