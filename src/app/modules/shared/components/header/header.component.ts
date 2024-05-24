import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  email1="astralstarseed@gmail.com";
  email2="sanjukta.tarot.mail@gmail.com";
  mobile1="+918420347137";
  mobile2="+918420347137";
  whatsapp1="+918420347137";
  sessionResponse={
    mailsent:false,
    error:false,
    msg:"",  
  }
}
