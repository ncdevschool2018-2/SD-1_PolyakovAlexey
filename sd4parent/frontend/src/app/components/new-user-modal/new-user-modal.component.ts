import {Component, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'new-user-modal',
  templateUrl: './new-user-modal.component.html',
})
export class NewUserModalComponent {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
