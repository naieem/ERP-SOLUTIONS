import {Injectable,EventEmitter} from '@angular/core';
import navigations from "../../../navigations";
import {SiteRoute} from '../../../routes';
@Injectable({providedIn: 'root'})
export class CoreService {
  changeTheme: EventEmitter<string> = new EventEmitter();
  changeSideNavToolbarStatus:EventEmitter<boolean> = new EventEmitter();
  private hideToolbar:boolean;
  private hideSidenav:boolean;
  private isLoggedIn:boolean;
  constructor() {}
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
    this.changeSideNavToolbarStatus.emit(true);
  }
  showSidenavToolbar(){
    this.hideSidenav=false;
    this.hideToolbar=false;
    this.changeSideNavToolbarStatus.emit(false);
  }
  setUserLoggedInStatus(status){
    this.isLoggedIn = status;
  }
  getLoggedInUserStatus(){
    return this.isLoggedIn;
  }

}
