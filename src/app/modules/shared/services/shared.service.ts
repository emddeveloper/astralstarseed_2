
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Iparams {
  "name":String,
  "phone":String,
  "subject":String,
  "message":String,
  "email":String
}
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  loader: boolean;
  sessionResponse: Object;
  constructor(private http: HttpClient) {}
  
  bookSession( email: any,phone: any) {
    this.loader = true;
    const sessionBookingParams : Iparams ={
      "name":'',
      "phone":phone,
      "subject":'Astralstarseed : Requested for Session Booking',
      "message":'Please contact me ',
      "email":email
    }
   return this.http.post('./astralstartseed_blackbox/contactform.php', sessionBookingParams);
  }

  contactUs( contactDetails : any) {
    this.loader = true;
    const contactUsParams : Iparams ={
      "name": contactDetails?.name,
      "phone":contactDetails?.phone,
      "subject":'Astralstarseed : Query from Astralstarseed Website by '+contactDetails?.name,
      "message": contactDetails?.message ? contactDetails?.message :'Please contact me ',
      "email": contactDetails?.email
    }
   return this.http.post('./astralstartseed_blackbox/contactform.php', contactUsParams);
  }
}
