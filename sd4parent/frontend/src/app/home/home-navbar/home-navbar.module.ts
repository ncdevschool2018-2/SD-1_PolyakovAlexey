import { NgModule } from '@angular/core';

import { HomeNavbarComponent } from "./home-navbar.component";
import { DropdownMenuComponent } from "./dropdown-menu/dropdown-menu.component";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    HomeNavbarComponent,
    DropdownMenuComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [
    HomeNavbarComponent,
    DropdownMenuComponent,
  ],
  providers: [

  ],
})
export class HomeNavbarModule { }
