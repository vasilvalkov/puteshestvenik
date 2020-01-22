import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { APP_CONSTANTS } from './app.constants';
import { UserLoggedGuardService } from './core/auth/user-logged-guard.service';


const APP_ROUTES: Routes = [
  {
    path: APP_CONSTANTS.routes.LOGIN,
    component: LoginComponent,
    canActivate: [UserLoggedGuardService]
  },
  {
    path: APP_CONSTANTS.routes.REGISTER,
    component: RegisterComponent,
    canActivate: [UserLoggedGuardService]
  },
  {
    path: APP_CONSTANTS.routes.PLACES,
    loadChildren: () => import('./places/places.module').then(m => m.PlacesModule)
  },
  {
    path: APP_CONSTANTS.routes.USER,
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
