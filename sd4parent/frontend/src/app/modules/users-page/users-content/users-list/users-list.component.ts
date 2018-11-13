import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../shared/models/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  @Input() users: User[];
  @Input() currentUser;

  @Output() edited = new EventEmitter<User>();
  @Output() deleted = new EventEmitter<User>();
}
