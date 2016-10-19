import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService} from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {

  contact: Contact = <Contact>{ address: {}};
  constructor(private route: ActivatedRoute, private contactsService: ContactsService, private router : Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contactsService.getContact(id).subscribe(contact => this.contact = contact);
  }

  cancel(contact: Contact) {
    this.router.navigate(['/contact/' + contact.id]);
  }

  save(contact: Contact) {
    this.contactsService.updateContact(contact).subscribe(() => this.router.navigate(['/contact/'+contact.id]));
  }

}
