import {Component} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";

@Component({
  selector: 'new-user-modal',
  templateUrl: './new-user-modal.component.html',
})
export class NewUserModalComponent {
  constructor(public bsModalRef: BsModalRef) {
  }

  closeModal() {
    this.bsModalRef.hide();
  }
}
