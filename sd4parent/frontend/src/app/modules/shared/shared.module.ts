import { NgModule } from '@angular/core';

import { NavbarComponent } from './components/navbar/navbar.component';
import { DropdownMenuComponent } from './components/navbar/dropdown-menu/dropdown-menu.component';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    NavbarComponent,
    DropdownMenuComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
  ],
  exports: [
    NavbarComponent,
    DropdownMenuComponent
  ],
  providers: [],
})
export class SharedModule {
}
