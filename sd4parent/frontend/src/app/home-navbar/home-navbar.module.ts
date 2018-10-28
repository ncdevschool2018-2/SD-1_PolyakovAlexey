import { NgModule } from '@angular/core';

import { HomeNavbarComponent } from "./home-navbar.component";
import { DropdownMenuComponent } from "./dropdown-menu/dropdown-menu.component";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  declarations: [
    HomeNavbarComponent,
    DropdownMenuComponent
  ],
  imports: [
    BsDropdownModule.forRoot()
  ],
  exports: [
    HomeNavbarComponent,
    DropdownMenuComponent,
  ],
  providers: [

  ],
})
export class HomeNavbarModule { }
