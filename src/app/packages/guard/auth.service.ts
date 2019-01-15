import { Injectable,EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserLoggedIn:boolean;
  onUserLoggedInStatusChange:EventEmitter<boolean> = new EventEmitter();
  constructor() { }
  setUserLoggedInUserStatus(status:boolean):void{
    this.isUserLoggedIn = status;
    this.onUserLoggedInStatusChange.emit(status);
  }
  IsUserLoggedIn():boolean{
    return this.isUserLoggedIn;
  }
}
