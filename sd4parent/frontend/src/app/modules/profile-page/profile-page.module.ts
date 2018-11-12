import {NgModule} from '@angular/core';

import {ProfilePageComponent} from "./profile-page.component";
import {HomePageModule} from "../home-page/home-page.module";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    ProfilePageComponent,
  ],
  imports: [
    HomePageModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    ProfilePageComponent,
  ],
  providers: [],
})
export class ProfilePageModule {
}
