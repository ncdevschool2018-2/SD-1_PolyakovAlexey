import {NgModule} from '@angular/core';

import {WelcomePageComponent} from "./welcome-page.component";
import {WelcomePageNavbarComponent} from "./welcome-page-navbar/welcome-page-navbar.component";
import {WelcomePageContentComponent} from "./welcome-page-content/welcome-page-content.component";
import {WelcomePageFooterComponent} from "./welcome-page-footer/welcome-page-footer.component";

@NgModule({
  declarations: [
    WelcomePageComponent,
    WelcomePageNavbarComponent,
    WelcomePageContentComponent,
    WelcomePageFooterComponent
  ],
  imports: [],
  exports: [
    WelcomePageComponent,
    WelcomePageNavbarComponent,
    WelcomePageContentComponent,
    WelcomePageFooterComponent
  ],
  providers: [],
})
export class WelcomePageModule {
}
