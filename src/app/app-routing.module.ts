import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  /* define app module routes here, e.g., to lazily load a module
        (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
  */
  { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
