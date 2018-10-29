import { NgModule } from '@angular/core';

import { IndexNavbarComponent } from "./index-navbar.component";
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    IndexNavbarComponent,
  ],
  imports: [
    ModalModule.forRoot()
  ],
  exports: [
    IndexNavbarComponent,
  ],
  providers: [

  ],
})
export class IndexNavbarModule { }
