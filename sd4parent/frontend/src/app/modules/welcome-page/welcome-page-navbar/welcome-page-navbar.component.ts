import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { AuthorizationModalComponent } from '../authorization-modal/authorization-modal.component';

@Component({
  selector: 'app-welcome-page-navbar',
  templateUrl: './welcome-page-navbar.component.html',
})
export class WelcomePageNavbarComponent {
  bsModalRef: BsModalRef;

  constructor(private _modalService: BsModalService) {
  }

  openAuthorizationModal() {
    this.bsModalRef = this._modalService.show(AuthorizationModalComponent);
  }
}
