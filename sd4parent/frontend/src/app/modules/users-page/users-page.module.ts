import {NgModule} from '@angular/core';

import {UsersPageComponent} from "./users-page.component";
import {HomePageModule} from "../home-page/home-page.module";
import {UsersContentComponent} from "./users-content/users-content.component";
import {UsersListComponent} from "./users-content/users-list/users-list.component";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    UsersPageComponent,
    UsersContentComponent,
    UsersListComponent
  ],
  imports: [
    HomePageModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    UsersPageComponent,
    UsersContentComponent,
    UsersListComponent
  ],
  providers: [],
})
export class UsersPageModule {
}
