import {NgModule} from '@angular/core';

import {NavbarComponent} from './components/navbar/navbar.component';
import {DropdownMenuComponent} from './components/navbar/dropdown-menu/dropdown-menu.component';
import {BsDropdownModule} from 'ngx-bootstrap';
import {EnumPipe} from './pipes/enum.pipe';
import {ViewPipe} from './pipes/view.pipe';
import {DetailsService} from './services/details.service';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    NavbarComponent,
    DropdownMenuComponent,
    EnumPipe,
    ViewPipe
  ],
  imports: [
    BsDropdownModule.forRoot(),
    RouterModule
  ],
  exports: [
    NavbarComponent,
    DropdownMenuComponent,
    EnumPipe,
    ViewPipe
  ],
  providers: [
    DetailsService,
    EnumPipe,
    ViewPipe
  ]
})
export class SharedModule {
}
