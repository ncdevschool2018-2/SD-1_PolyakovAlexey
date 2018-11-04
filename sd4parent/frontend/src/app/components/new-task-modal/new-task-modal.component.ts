import {Component} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";

@Component({
  selector: 'new-task-modal',
  templateUrl: './new-task-modal.component.html',
})
export class NewTaskModalComponent {
  constructor(public bsModalRef: BsModalRef) {
  }

  closeModal() {
    this.bsModalRef.hide();
  }
}
