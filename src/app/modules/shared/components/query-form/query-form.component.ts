import { Component } from '@angular/core';

@Component({
  selector: 'app-query-form',
  standalone: true,
  imports: [],
  templateUrl: './query-form.component.html',
  styleUrl: './query-form.component.scss'
})
export class QueryFormComponent {
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
}
