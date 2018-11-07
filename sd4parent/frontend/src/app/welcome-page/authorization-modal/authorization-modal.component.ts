import {Component} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";

@Component({
  selector: 'authorization-modal',
  templateUrl: './authorization-modal.component.html',
  styleUrls: ['./authorization-modal.component.css']
})
export class AuthorizationModalComponent {
  constructor(public bsModalRef: BsModalRef) {
  }

  closeModal() {
    this.bsModalRef.hide();
  }
}
