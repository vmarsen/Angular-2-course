import { Injectable } from '@angular/core';
import { CONTACT_DATA } from './data/contact-data';
import { Http } from '@angular/http';
import { Contact } from './models/contact'

@Injectable()
export class ContactsService {

  API_ENDPOINT : string = "http://localhost:4201";
  constructor(private http: Http) { }
 // private contacts: Contact[] = CONTACT_DATA;

  getContacts(){
    //return CONTACT_DATA;
    return this.http.get(this.API_ENDPOINT + '/api/contacts')
      .map((res) => { return res.json(); })
      .map((data) => { return data.items; });
  }

  getContact(id: number | string){
    //return CONTACT_DATA.find(contact => contact.id == id);
    return this.http.get(this.API_ENDPOINT + '/api/contacts/'+ id)
      .map((res) => { return res.json(); })
      .map((data) => { return data.item; });
  }

  updateContact(contact: Contact) {
    return this.http.put(this.API_ENDPOINT + '/api/contacts/'+ contact.id, contact);
  }
}
