import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('micasaluxToken')) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}


@Injectable({
  providedIn: 'root'
})
export class LoginActivate implements CanActivate {
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot) {
    if (localStorage.getItem('micasaluxToken')) {
      return true;
    } else {
      this.router.navigate(['/']);
      return true;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class AlreadyLoginActivate implements CanActivate {
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot) {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/dashboard']);
      return true;
    } else {
      return true;
    }
  }
}
