import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  //Generic behavior
  isUserLogged: BehaviorSubject<boolean>;
  constructor() {
    this.isUserLogged = new BehaviorSubject<boolean>(this.getUserLogged);
  }
  // login
  login(useremail: string, password: string) {
    let token = '123456';
    localStorage.setItem('usertoken', token);
    this.isUserLogged.next(true);
  }
  // logout
  logout() {
    localStorage.removeItem('usertoken');
    this.isUserLogged.next(false);
  }

  get getUserLogged() {
    return localStorage.getItem('usertoken') ? true : false;
  }
  getUserLogObserable(){
    return this.isUserLogged.asObservable()
  }
}
