import { Component, OnInit } from '@angular/core';
import Contact from './contact';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // let contact = new Contact();
    // contact.sayHi();
    // contact.settings={
    //   name:'updated',
    //   email:'updatd'
    // };
    // contact.sayHi();
    // console.log(Contact.Pi);
    // console.log(Contact.calCPi(3));
    console.log(Contact.calCPi(2));
    // contact.greeting = 'Ulala test';
    // console.log(contact.greeting);
  }
}
