import {Component, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'index-navbar',
  templateUrl: './index-navbar.component.html',
})
export class IndexNavbarComponent {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  _openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public _closeModal(): void {
    this.modalRef.hide();
  }
}
