import { NgModule } from '@angular/core';

import { ProfileComponent } from "./profile.component";
import { HomeNavbarModule } from "../home/home-navbar/home-navbar.module";
import { ProfileTicketsModule } from "./profile-tickets/profile-tickets.module";
import { ProfileDataModule } from "./profile-data/profile-data.module";

@NgModule({
  declarations: [
    ProfileComponent,
  ],
  imports: [
    HomeNavbarModule,
    ProfileDataModule,
    ProfileTicketsModule
  ],
  exports: [
    ProfileComponent,
  ],
  providers: [

  ],
})
export class ProfileModule { }
