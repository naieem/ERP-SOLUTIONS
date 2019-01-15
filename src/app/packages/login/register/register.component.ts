import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import * as firebase from 'firebase';
import {CoreService} from '../../core/services/core.service';
@Component({selector: 'app-register', templateUrl: './register.component.html', styleUrls: ['./register.component.scss']})
export class RegisterComponent implements OnInit {
  registerForm : any;
  constructor(private fb : FormBuilder, private coreService : CoreService, private router : Router) {
    this.registerForm = this
      .fb
      .group({
        email: [
          '', Validators.required
        ],
        fname: [
          '', Validators.required
        ],
        lname: [
          '', Validators.required
        ],
        address: [
          '', Validators.required
        ],
        password: [
          '', Validators.required
        ],
        cpassword: ['', Validators.required]

      });
  }

  ngOnInit() {
    let isUserLoggedIn = this
      .coreService
      .getLoggedInUserStatus();
    if (isUserLoggedIn) {
      this
        .coreService
        .showSidenavToolbar();
      this
        .router
        .navigate(["/"]);
    } else {
      this
        .coreService
        .hideSideNavToolbar();
    }
  }
  showLoginForm(event){
    event.preventDefault();
    event.stopPropagation();
    this
      .router
      .navigate(['/login']);
  }
  onSubmit(){
    console.log(this.registerForm.value);
  }

}
