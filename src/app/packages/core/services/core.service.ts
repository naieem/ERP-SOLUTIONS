import {Injectable,EventEmitter} from '@angular/core';
import navigations from "../../../navigations";
import {SiteRoute} from '../../../routes';
@Injectable({providedIn: 'root'})
export class CoreService {
  changeTheme: EventEmitter<string> = new EventEmitter();
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
}
