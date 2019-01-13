import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import * as firebase from 'firebase';
@Component({selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.scss']})
export class HomeComponent implements OnInit {
  items : any;
  db : any;
  constructor(private router : Router) {
    this.db = firebase
      .database()
      .ref('items');
  }

  ngOnInit() {
    this
      .db
      .once("value")
      .then((snapshot) => {
        console.log(snapshot.val());
        this.items = snapshot.val();
      });
  }
  gotoItemDetails(itemId) {
    this
      .router
      .navigate(['/item', itemId]);
  }

}
