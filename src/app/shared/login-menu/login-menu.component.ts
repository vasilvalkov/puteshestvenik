import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User as FbUser } from 'firebase/app';

import { AuthService } from '../../core/auth/auth.service';
import { AppConstantInjectionToken, AppConstants } from '../../app.constants.injection';


@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.scss']
})
export class LoginMenuComponent implements OnInit {

  loginRoute: string;
  registerRoute: string;
  userProfileRoute: string;
  currentUser: Observable<FbUser>;

  constructor(
    private authService: AuthService,
    @Inject(AppConstantInjectionToken) private app_constants: AppConstants
  ) { }

  ngOnInit() {
    this.initializeProperties();
  }

  logout(): void {
    this.authService.logout();
  }

  private initializeProperties(): void {
    this.currentUser = this.authService.currentUser;
    this.loginRoute = `/${this.app_constants.routes.LOGIN}`;
    this.registerRoute = `${this.app_constants.routes.REGISTER}`;
    this.userProfileRoute = `${this.app_constants.routes.PROFILE}`;
  }

}
