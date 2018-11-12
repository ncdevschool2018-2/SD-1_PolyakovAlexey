import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../shared/models/User';
import { NewUserModalComponent } from './new-user-modal/new-user-modal.component';
import { Subscription } from 'rxjs';
import { UsersPageComponent } from '../users-page.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';


@Component({
  selector: 'app-users-content',
  templateUrl: './users-content.component.html',
  styleUrls: ['./users-content.component.css']
})
export class UsersContentComponent {
  @Input() users: User[];
  @Input() subscriptionUsers: Subscription[];
  @Input() usersComponent: UsersPageComponent;
  @Input() currentUser;

  @Output() edited = new EventEmitter<User>();
  @Output() deleted = new EventEmitter<string>();

  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {

  }

  openNewUserModal() {
    const initialState = {
      subscriptionUsers: this.subscriptionUsers,
      usersComponent: this.usersComponent
    };
    this.bsModalRef = this.modalService.show(NewUserModalComponent, {initialState});
  }

  edit(user: User) {
    this.edited.emit(user);
  }

  delete(id: string) {
    this.deleted.emit(id);
  }
}
