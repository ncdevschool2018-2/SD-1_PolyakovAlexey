import {Component} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {NewProjectModalComponent} from "../new-project-modal/new-project-modal.component";
import {NewUserModalComponent} from "../new-user-modal/new-user-modal.component";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  bsModalRef: BsModalRef;

  constructor(private _modalService: BsModalService) {
  }

  openNewProjectModal() {
    this.bsModalRef = this._modalService.show(NewProjectModalComponent);
  }

  openNewUserModal() {
    this.bsModalRef = this._modalService.show(NewUserModalComponent);
  }

}
