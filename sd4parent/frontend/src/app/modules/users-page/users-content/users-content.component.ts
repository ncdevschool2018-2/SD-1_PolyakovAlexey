import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../../shared/models/User";


@Component({
  selector: 'users-content',
  templateUrl: './users-content.component.html',
  styleUrls: ['./users-content.component.css']
})
export class UsersContentComponent {
  @Input() users: User[];

  @Output() onEdited = new EventEmitter<User>();
  @Output() onDeleted = new EventEmitter<string>();

  edit(user: User) {
    this.onEdited.emit(user);
  }

  delete(id: string) {
    this.onDeleted.emit(id);
  }
}
