import {NgModule} from '@angular/core';

import {WelcomePageComponent} from "./welcome-page.component";
import {WelcomePageNavbarComponent} from "./welcome-page-navbar/welcome-page-navbar.component";
import {WelcomePageContentComponent} from "./welcome-page-content/welcome-page-content.component";
import {WelcomePageFooterComponent} from "./welcome-page-footer/welcome-page-footer.component";
import {AuthorizationModalComponent} from "./authorization-modal/authorization-modal.component";

@NgModule({
  declarations: [
    WelcomePageComponent,
    WelcomePageNavbarComponent,
    WelcomePageContentComponent,
    WelcomePageFooterComponent,
    AuthorizationModalComponent
  ],
  imports: [],
  exports: [
    WelcomePageComponent,
    WelcomePageNavbarComponent,
    WelcomePageContentComponent,
    WelcomePageFooterComponent,
    AuthorizationModalComponent
  ],
  providers: [],
})
export class WelcomePageModule {
}
