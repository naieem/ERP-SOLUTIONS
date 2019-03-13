import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {Angulartics2} from 'angulartics2';
import * as firebase from 'firebase';
import {CoreService} from '../../core/services/core.service';

@Component({selector: 'app-login', templateUrl: './login.component.html', styleUrls: ['./login.component.scss']})
export class LoginComponent implements OnInit {
  loginForm : any;
  constructor(private fb : FormBuilder, private coreService : CoreService, private router : Router, private angulartics2 : Angulartics2) {

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
    firebase
      .auth()
      .signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)
      .then((userinfo) => {
        console.log(userinfo);
        debugger;
        // if(window && window['ga']){   window['ga']('send', {     hitType: 'event',
        //  eventCategory: 'My Category',     eventAction: 'My Action',     eventLabel:
        // 'My Label',     dimension1: 'the value for my dimension'   }); }

        this
          .angulartics2
          .eventTrack
          .next({
            action: 'UserLogin',
            properties: {
              label: userinfo.user.email + ' logged in',
              category: 'UserLogin',
              dimension1: userinfo.user.email + ' logged in'
            }
          });

        firebase
          .auth()
          .currentUser
          .getIdToken()
          .then((idToken) => {
            debugger;
            localStorage.setItem('accessToken', idToken)
          })
          .catch((error) => {
            console.log('error found in login submit call');
            console.log(error);
          });
        if (userinfo) {
          this
            .coreService
            .showSidenavToolbar();
          this
            .coreService
            .setUserLoggedInStatus(true);
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
