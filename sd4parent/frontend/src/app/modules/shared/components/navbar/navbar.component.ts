import {Component, Input} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {NewProjectModalComponent} from "../new-project-modal/new-project-modal.component";
import {NewUserModalComponent} from "../new-user-modal/new-user-modal.component";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Input() subscriptionUsers;
  @Input() usersComponent;

  @Input() subscriptionProjects;
  @Input() projectsComponent;

  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
  }

  openNewProjectModal() {
    const initialState = {
      subscriptionProjects: this.subscriptionProjects,
      projectsComponent: this.projectsComponent
    };
    this.bsModalRef = this.modalService.show(NewProjectModalComponent, {initialState});
  }

  openNewUserModal() {
    const initialState = {
      subscriptionUsers: this.subscriptionUsers,
      usersComponent: this.usersComponent
    };
    this.bsModalRef = this.modalService.show(NewUserModalComponent, {initialState});
  }

}
