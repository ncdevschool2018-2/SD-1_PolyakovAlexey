import { NgModule } from '@angular/core';

import { NavbarComponent } from './components/navbar/navbar.component';
import { DropdownMenuComponent } from './components/navbar/dropdown-menu/dropdown-menu.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { DetailsService } from './services/details.service';
import { RouterModule } from '@angular/router';
import { LoginUserService } from './services/login-user.service';

@NgModule({
  declarations: [
    NavbarComponent,
    DropdownMenuComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    RouterModule
  ],
  exports: [
    NavbarComponent,
    DropdownMenuComponent
  ],
  providers: [
    DetailsService,
    LoginUserService
  ]
})
export class SharedModule {
}
