import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { AuthorizationModalComponent } from '../authorization-modal/authorization-modal.component';

@Component({
  selector: 'app-welcome-page-content',
  templateUrl: './welcome-page-content.component.html',
  styleUrls: ['./welcome-page-content.component.css']
})
export class WelcomePageContentComponent {
  bsModalRef: BsModalRef;

  constructor(private _modalService: BsModalService) {
  }

  openAuthorizationModal() {
    this.bsModalRef = this._modalService.show(AuthorizationModalComponent);
  }
}
