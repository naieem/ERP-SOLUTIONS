import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import * as firebase from 'firebase';
import {CoreService} from '../../core/services/core.service';
import { AuthService } from '../../guard/auth.service';
@Component({selector: 'app-login', templateUrl: './login.component.html', styleUrls: ['./login.component.scss']})
export class LoginComponent implements OnInit {
  loginForm : any;
  constructor(private fb : FormBuilder, private coreService : CoreService,private authService:AuthService, private router : Router) {
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

    // if (this.loginForm.value.email == 'nms@selise.ch' &&
    // this.loginForm.value.password == '123456') {   this     .coreService
    // .showSidenavToolbar();   this     .coreService .setUserLoggedInStatus(true);
    //  this     .router     .navigate(["/"]); }
    firebase
      .auth()
      .signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)
      .then((userinfo) => {
        console.log(userinfo);
        if (userinfo) {
          this
            .coreService
            .showSidenavToolbar();
          this.authService.setUserLoggedInUserStatus(true);
          this
            .router
            .navigate(['/']);
        }
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);

      });
  }
  showRegisterForm(event) {
    event.preventDefault();
    event.stopPropagation();
    this
      .router
      .navigate(['./login/register']);
  }

}
