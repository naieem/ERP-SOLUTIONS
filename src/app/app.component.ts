import {Component, OnInit} from '@angular/core';
import {ObservableMedia, MediaChange} from '@angular/flex-layout';
import {Subscription} from 'rxjs';
import {Router} from "@angular/router";
import * as firebase from 'firebase';
import {CoreService} from './packages/core';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.scss']})
export class AppComponent implements OnInit {
  hideSidenavToolbar = true;
  opened = true;
  over = 'side';
  expandHeight = '42px';
  collapseHeight = '42px';
  displayMode = 'flat';
  currentTheme = 'pink';
  watcher : Subscription;

  constructor(media : ObservableMedia, private coreService : CoreService, private router : Router) {
    this.watcher = media.subscribe((change : MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.opened = false;
        this.over = 'push';
      } else {
        this.over = 'side';
      }
    });
    this
      .coreService
      .changeTheme
      .subscribe((themeName) => {
        this.currentTheme = themeName;
      });
    // hiding toolbar and sidenav
    this
      .coreService
      .changeSideNavToolbarStatus
      .subscribe((result : boolean) => {
        
        this.hideSidenavToolbar = result;
      });
  }
  ngOnInit() {
    // if (!this.coreService.getLoggedInUserStatus()) {   this     .router
    // .navigate(['/login']); }
    firebase
      .auth()
      .onAuthStateChanged((user)=> {
        
        if (user) {
          this.coreService.setUserLoggedInStatus(true);
          this.hideSidenavToolbar = false;
        } else {
          this.hideSidenavToolbar = true;
          this.coreService.setUserLoggedInStatus(false);
          this
            .router
            .navigate(['/login']);
        }
      });

      // setTimeout(() => {
      //   
      //   firebase.auth().signOut();
      // }, 10000);

  }
}
