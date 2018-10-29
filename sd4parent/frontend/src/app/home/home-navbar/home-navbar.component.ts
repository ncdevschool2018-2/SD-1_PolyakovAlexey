import {Component, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'home-navbar',
  templateUrl: './home-navbar.component.html',
})
export class HomeNavbarComponent {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  _openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public _closeModal(): void {
    this.modalRef.hide();
  }
}
