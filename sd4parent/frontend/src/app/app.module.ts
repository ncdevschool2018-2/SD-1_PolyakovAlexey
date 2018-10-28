import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeNavbarModule } from "./home-navbar/home-navbar.module";
import {HomeContentModule} from "./home-content/home-content.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HomeNavbarModule,
    HomeContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
