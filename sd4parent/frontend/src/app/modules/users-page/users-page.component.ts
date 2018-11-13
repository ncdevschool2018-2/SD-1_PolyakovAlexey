import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../shared/models/User';
import { BsModalService } from 'ngx-bootstrap';
import { Subscription } from 'rxjs';
import { UserService } from '../shared/services/user.service';
import { NewUserModalComponent } from './users-content/new-user-modal/new-user-modal.component';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html'
})
export class UsersPageComponent implements OnInit, OnDestroy {
  users: User[];
  subscriptionsOnUsers: Subscription[] = [];
  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  constructor(private modalService: BsModalService, private userService: UserService) {
  }

  ngOnInit() {
    this.loadUsers();
  }

  added() {
    const initialState = {
      editMode: false,
      subscriptionsOnUsers: this.subscriptionsOnUsers,
      usersPageComponent: this
    };
    this.modalService.show(NewUserModalComponent, {initialState});
  }

  edited(user: User) {
    const initialState = {
      user: user,
      editMode: true,
      subscriptionsOnUsers: this.subscriptionsOnUsers,
      usersPageComponent: this
    };
    this.modalService.show(NewUserModalComponent, {initialState});
  }

  public deleted(user: User): void {
    this.subscriptionsOnUsers.push(this.userService.deleteUser(user.id).subscribe(() => {
      this.updateUsers();
    }));
  }

  public updateUsers(): void {
    this.loadUsers();
  }

  ngOnDestroy(): void {
    this.subscriptionsOnUsers.forEach(subscription => subscription.unsubscribe());
  }

  private loadUsers(): void {
    this.subscriptionsOnUsers.push(this.userService.getUsers().subscribe(users => {
      this.users = users as User[];
    }));
  }
}
