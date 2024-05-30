
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
  public params : Iparams = {
    "name":'',
    "phone":'',
    "subject":'Astralstarseed : Requested for Session Booking',
    "message":'Please contact me ',
    "email":''
  }
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
}
