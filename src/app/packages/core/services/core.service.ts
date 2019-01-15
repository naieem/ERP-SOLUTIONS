import {Injectable,EventEmitter} from '@angular/core';
import { AuthService } from '../../guard/auth.service';
import navigations from "../../../navigations";
import {SiteRoute} from '../../../routes';
@Injectable({providedIn: 'root'})
export class CoreService {
  changeTheme: EventEmitter<string> = new EventEmitter();
  changeSideNavToolbarStatus:EventEmitter<boolean> = new EventEmitter();
  private hideToolbar:boolean;
  private hideSidenav:boolean;
  private isLoggedIn:boolean;
  constructor(private authService:AuthService) {
    this.authService.onUserLoggedInStatusChange.subscribe((status)=>{
      debugger;
      if(status){
        this.showSidenavToolbar();
      }else{
        this.hideSideNavToolbar();
      }
    });
  }
  getRouteConfig() {
    return SiteRoute;
  }
  getVisibleRoutes(){
    let routes = [];
    navigations.map((value,index)=>{
      // console.log(value);
      if(value.IsVisible){
        routes.push(value);
      }
    });
    return routes;
  }
  hideSideNavToolbar(){
    this.hideSidenav = true;
    this.hideToolbar = true;
    this.setUserLoggedInStatus(false);
    this.changeSideNavToolbarStatus.emit(true);
  }
  showSidenavToolbar(){
    this.hideSidenav=false;
    this.hideToolbar=false;
    this.setUserLoggedInStatus(true);
    this.changeSideNavToolbarStatus.emit(false);
  }
  setUserLoggedInStatus(status:boolean){
    this.isLoggedIn = status;
  }
  getLoggedInUserStatus():boolean{
    return this.isLoggedIn;
  }

}
