import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';
import { AuthorizationModalComponent } from '../authorization-modal/authorization-modal.component';

@Component({
  selector: 'app-welcome-page-navbar',
  templateUrl: './welcome-page-navbar.component.html',
})
export class WelcomePageNavbarComponent {

  constructor(private modalService: BsModalService) {

  }

  openSignInModal() {
    this.modalService.show(AuthorizationModalComponent);
  }
}
