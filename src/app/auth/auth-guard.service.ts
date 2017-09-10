import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { User as FbUser } from 'firebase/app';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private authService: AuthService,
        private router: Router,
        private afAuth: AngularFireAuth) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.checkLoggedIn();
    }

    checkLoggedIn() {
        if (this.afAuth.auth.currentUser) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
