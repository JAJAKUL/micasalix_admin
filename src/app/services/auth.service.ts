import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState = new BehaviorSubject<boolean>(false);
  constructor(
    private router: Router
  ) {
    this.ifLoggedIn();
  }


  ifLoggedIn() {
    let token = localStorage.getItem("micasaluxToken");
    if (token) {
      console.log('token============true=====', token, this.authState.asObservable())
      this.authState.next(true);
    }else{
      console.log('token============false=====', token,  this.authState.asObservable())
      this.router.navigate(['/login']);
      this.authState.next(false);
    }
  }



  logout() {
    this.router.navigate(['/login']);
    this.authState.next(false);
    localStorage.clear();
  }

  isAuthenticated() {
    return this.authState.value;
  }


  getUserId() {
    let userDtls = JSON.parse(localStorage.getItem("adminData"));
    return userDtls.userid;
  }


  tokenCheck() {
    let token = localStorage.getItem("micasaluxToken");
    if (token) {
      return true;
    } else {
      return false;
    }
  }


}
