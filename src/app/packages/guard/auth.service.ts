import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserLoggedIn:boolean;
  constructor() { }
  setUserLoggedInUserStatus(status:boolean):void{
    this.isUserLoggedIn = status;
  }
  IsUserLoggedIn():boolean{
    return this.isUserLoggedIn;
  }
}
