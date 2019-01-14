import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {CoreService} from '../../core/services/core.service';
@Component({selector: 'app-login', templateUrl: './login.component.html', styleUrls: ['./login.component.scss']})
export class LoginComponent implements OnInit {
  loginForm : any;
  constructor(private fb : FormBuilder, private coreService : CoreService, private router : Router) {
    this.loginForm = this
      .fb
      .group({
        email: [
          '', Validators.required
        ],
        password: ['', Validators.required]

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
  onSubmit() {
    debugger;
    if (this.loginForm.value.email == 'nms@selise.ch' && this.loginForm.value.password == '123456') {
      this
        .coreService
        .showSidenavToolbar();
      this
        .coreService
        .setUserLoggedInStatus(true);
      this
        .router
        .navigate(["/"]);
    }
  }

}
