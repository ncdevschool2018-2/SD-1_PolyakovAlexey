import { NgModule } from '@angular/core';

import { IndexComponent } from "./index.component";

import { IndexNavbarModule } from "./index-navbar/index-navbar.module";
import { IndexContentModule } from "./index-content/index-content.module";
import { IndexFooterModule } from "./index-footer/index-footer.module";

@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    IndexNavbarModule,
    IndexContentModule,
    IndexFooterModule
  ],
  exports: [
    IndexComponent,
  ],
  providers: [

  ],
})
export class IndexModule { }
