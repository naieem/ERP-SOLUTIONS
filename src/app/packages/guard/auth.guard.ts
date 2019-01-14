import {Injectable} from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    NavigationExtras,
    CanLoad,
    Route
} from '@angular/router';
import {AuthService} from './auth.service';
import * as firebase from 'firebase';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate,
CanActivateChild,
CanLoad {
    constructor(private authService : AuthService, private router : Router) {
        debugger;
        // this.checkLogin();
    }

    canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : boolean {
        let url: string = state.url;
        return this
            .authService
            .IsUserLoggedIn();
        // return this.checkLogin(url);
    }

    canActivateChild(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : boolean {
        return this
            .authService
            .IsUserLoggedIn();
    }

    canLoad(route : Route) : boolean {
        let url = `/${route.path}`;
        debugger;
        let isUserLoggedIn = this.authService.IsUserLoggedIn();
        // location.href = '/login';
        return false;
    }

    checkLogin() {
        firebase
            .auth()
            .onAuthStateChanged((user) => {
                if (user) {
                    this
                        .authService
                        .setUserLoggedInUserStatus(true);
                } else {
                    this
                        .authService
                        .setUserLoggedInUserStatus(true);
                    this
                        .router
                        .navigate(['/login']);
                }
            });
    }
}