import {NgModule} from '@angular/core';

import {UserProfileComponent} from "./user-profile.component";
import {HomePageModule} from "../home-page/home-page.module";

@NgModule({
  declarations: [
    UserProfileComponent,
  ],
  imports: [
    HomePageModule,
  ],
  exports: [
    UserProfileComponent,
  ],
  providers: [],
})
export class UserProfileModule {
}
