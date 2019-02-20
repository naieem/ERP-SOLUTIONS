import {Component, OnInit} from '@angular/core';
import {ObservableMedia, MediaChange} from '@angular/flex-layout';
import {Subscription} from 'rxjs';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import {Router,NavigationEnd} from "@angular/router";
import {AuthService} from './packages/guard/auth.service';
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

  constructor(media : ObservableMedia,angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics, private authService : AuthService, private coreService : CoreService, private router : Router) {
    angulartics2GoogleAnalytics.startTracking();
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
    // show/hiding toolbar and sidenav
    this
      .coreService
      .changeSideNavToolbarStatus
      .subscribe((result : boolean) => {
        debugger;
        this.hideSidenavToolbar = result;
      });
  }
  ngOnInit() {
  }
}
