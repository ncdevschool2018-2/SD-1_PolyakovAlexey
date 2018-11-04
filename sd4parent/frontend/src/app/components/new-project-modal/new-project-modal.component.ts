import {Component} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";

@Component({
  selector: 'new-project-modal',
  templateUrl: './new-project-modal.component.html',
})
export class NewProjectModalComponent {

  constructor(public bsModalRef: BsModalRef) {}

  closeModal() {
    this.bsModalRef.hide();
  }
}
