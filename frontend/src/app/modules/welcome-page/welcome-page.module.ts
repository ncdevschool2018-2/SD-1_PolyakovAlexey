import { NgModule } from '@angular/core';

import { WelcomePageComponent } from './welcome-page.component';
import { WelcomePageNavbarComponent } from './welcome-page-navbar/welcome-page-navbar.component';
import { WelcomePageContentComponent } from './welcome-page-content/welcome-page-content.component';
import { AuthorizationModalComponent } from './authorization-modal/authorization-modal.component';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { TokenStorageService } from '../shared/services/token-storage.service';


@NgModule({
  declarations: [
    WelcomePageComponent,
    WelcomePageNavbarComponent,
    WelcomePageContentComponent,
    AuthorizationModalComponent
  ],
  imports: [
    ModalModule.forRoot(),
    FormsModule,
    RouterModule
  ],
  exports: [
    WelcomePageComponent,
    WelcomePageNavbarComponent,
    WelcomePageContentComponent,
    AuthorizationModalComponent
  ],
  providers: [
    AuthService,
    TokenStorageService
  ],
  entryComponents: [
    AuthorizationModalComponent
  ]
})
export class WelcomePageModule {
}
