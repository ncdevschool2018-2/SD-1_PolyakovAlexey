import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';
import { AuthorizationModalComponent } from '../authorization-modal/authorization-modal.component';

@Component({
  selector: 'app-welcome-page-content',
  templateUrl: './welcome-page-content.component.html',
  styleUrls: ['./welcome-page-content.component.css']
})
export class WelcomePageContentComponent {

  constructor(private modalService: BsModalService) {
  }

  openAuthorizationModal() {
    this.modalService.show(AuthorizationModalComponent);
  }
}
