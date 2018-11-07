import {NgModule} from '@angular/core';

import {ProfilePageComponent} from "./profile-page.component";
import {HomePageModule} from "../home-page/home-page.module";

@NgModule({
  declarations: [
    ProfilePageComponent,
  ],
  imports: [
    HomePageModule,
  ],
  exports: [
    ProfilePageComponent,
  ],
  providers: [],
})
export class ProfilePageModule {
}
