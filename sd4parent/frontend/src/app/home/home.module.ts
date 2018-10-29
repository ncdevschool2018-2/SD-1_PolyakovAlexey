import { NgModule } from '@angular/core';

import { HomeNavbarModule } from "./home-navbar/home-navbar.module";
import { HomeContentModule } from "./home-content/home-content.module";
import { HomeComponent } from "./home.component";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeNavbarModule,
    HomeContentModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [

  ],
})
export class HomeModule { }
