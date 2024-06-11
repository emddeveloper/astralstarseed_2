import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
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
  public contactDetails : any;
  sessionResponse : any ={
    mailsent:false,
    error:false,
    msg:"",  
  }

  bookSessionForm: FormGroup;
  isSubmitted = false;
  loader: boolean;
  @ViewChild('closeButton', { static: true }) closeButton: ElementRef;
  displayForm: boolean = true;
  constructor(private fb: FormBuilder, private sharedService : SharedService, private renderer: Renderer2) {
    this.bookSessionForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]]
    });
    this.contactDetails = sharedService.getContactDetails();
  }

  booksession() {
    if (this.bookSessionForm.valid) {
      this.sharedService.bookSession(this.bookSessionForm.value.email,this.bookSessionForm.value.phone).subscribe({
        next : (response ) => {
          this.sessionResponse = response;
          console.log(response);
          this.loader = false; // Hide loader after successful response
          this.bookSessionForm.reset();
          this.displayForm = false;
          setTimeout(() => {
            this.closeTheModal()
          }, 3000);
        },
        error : (error) => {
          this.sessionResponse = error;
          console.log(error);
          this.loader = false; // Hide loader after error
          setTimeout(() => {
            this.closeTheModal()
          }, 3000);
          this.displayForm = false;
        },
        complete: () => {
          // Handle completion cases
          this.loader = false; // Hide loader after error
          this.bookSessionForm.reset();
        }
      });
      console.log('Form submitted!', this.bookSessionForm.value);
      this.isSubmitted = true;
      this.bookSessionForm.reset();
    }
  }
  closeTheModal() {
    this.renderer.setProperty(this.closeButton.nativeElement, 'click', null);
    const clickEvent = new MouseEvent('click', {
      bubbles: true, // Ensure event bubbles up
      cancelable: true // Allow default behavior to be canceled
    });
    this.closeButton.nativeElement.dispatchEvent(clickEvent);
  }

}
