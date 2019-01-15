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
    constructor(private authService : AuthService, private router : Router) {}

    canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : any {
        debugger;
        let url: string = state.url;
        return this
            .checkLogin(route)
            .then((status) => {
                debugger;
                if (!status) {
                    this
                        .router
                        .navigate(['/login']);
                }
                return status;
            });
    }

    canActivateChild(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : boolean {
        return this
            .authService
            .IsUserLoggedIn();
    }

    canLoad(route : Route) : boolean {
        let url = `/${route.path}`;
        debugger;
        let isUserLoggedIn = this
            .authService
            .IsUserLoggedIn();
        // location.href = '/login';
        return false;
    }

    checkLogin(route) {
        return new Promise((resolve, reject) => {
            firebase
                .auth()
                .onAuthStateChanged((info) => {
                    debugger;
                    if (info) {
                        resolve(this.reRouteOnAuthSUccess(route));
                    } else {
                        resolve(this.reRouteOnAuthFailed(route));
                    }
                })
        });
    }

    reRouteOnAuthSUccess(route) : boolean {
        this
            .authService
            .setUserLoggedInUserStatus(true);
        if (route.routeConfig.path == 'login') {
            this
                .router
                .navigate(['/']);
            return true;
        } else {
            return true;
        }
    }
    reRouteOnAuthFailed(route) : boolean {
        if(route.routeConfig.path == 'login') {
            this
                .authService
                .setUserLoggedInUserStatus(false);
            return true;
        } else {
            return false;
        }
    }
}