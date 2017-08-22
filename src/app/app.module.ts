import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlacesModule } from './places/places.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
],
  imports: [
    BrowserModule,
    PlacesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
