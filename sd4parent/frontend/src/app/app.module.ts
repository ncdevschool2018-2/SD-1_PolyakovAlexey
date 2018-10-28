import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeNavbarModule } from "./home-navbar/home-navbar.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HomeNavbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
