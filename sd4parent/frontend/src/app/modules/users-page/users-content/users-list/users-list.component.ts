import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../../../shared/models/User";

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  @Input() users: User[];
  @Input() currentUser;

  @Output() onEdited = new EventEmitter<User>();
  @Output() onDeleted = new EventEmitter<string>();

  edit(user: User) {
    this.onEdited.emit(user);
  }

  delete(id: string) {
    this.onDeleted.emit(id);
  }
}
