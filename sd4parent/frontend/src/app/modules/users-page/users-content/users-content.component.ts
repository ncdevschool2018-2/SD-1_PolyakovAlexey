import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../shared/models/User';


@Component({
  selector: 'app-users-content',
  templateUrl: './users-content.component.html',
  styleUrls: ['./users-content.component.css']
})
export class UsersContentComponent {
  @Input() users: User[];
  @Input() currentUser;

  @Output() added = new EventEmitter();
  @Output() edited = new EventEmitter<User>();
  @Output() deleted = new EventEmitter<User>();

  add() {
    this.added.emit();
  }

  edit(user: User) {
    this.edited.emit(user);
  }

  delete(user: User) {
    this.deleted.emit(user);
  }
}
