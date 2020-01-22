import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

import { AuthService } from './auth.service';


@Injectable()
export class UserLoggedGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.checkUser();
  }

  private checkUser(): Observable<boolean> {
    return this.authService.currentUser
      .pipe(
        take(1),
        map(res => {
          if (!!res) {
            this.router.navigate(['']);
            return false;
          }
          return true;
        })
      );
  }

}
