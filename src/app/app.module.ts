import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData, APP_BASE_HREF } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import localeBg from '@angular/common/locales/bg';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppConstantInjectionToken } from './app.constants.injection';
import { APP_CONSTANTS } from './app.constants';


registerLocaleData(localeBg);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'bg-BG' },
    { provide: AppConstantInjectionToken, useValue: APP_CONSTANTS },
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
