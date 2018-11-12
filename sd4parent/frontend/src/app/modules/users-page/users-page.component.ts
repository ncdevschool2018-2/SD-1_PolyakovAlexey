import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../shared/models/User';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Subscription } from 'rxjs';
import { UserService } from '../shared/services/user.service';
import { NewUserModalComponent } from './users-content/new-user-modal/new-user-modal.component';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html'
})
export class UsersPageComponent implements OnInit, OnDestroy {
  users: User[];
  bsModalRef: BsModalRef;
  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  subscriptionUsers: Subscription[] = [];

  constructor(private modalService: BsModalService, private userService: UserService) {
  }

  ngOnInit() {
    this.loadUsers();
  }

  edited(user: User) {
    const initialState = {
      user: user,
      editMode: true,
      subscriptionUsers: this.subscriptionUsers,
      usersComponent: this
    };
    this.bsModalRef = this.modalService.show(NewUserModalComponent, {initialState});
  }

  public deleted(id: string): void {
    this.subscriptionUsers.push(this.userService.deleteUser(id).subscribe(() => {
      this.updateUsers();
    }));
  }

  public updateUsers(): void {
    this.loadUsers();
  }

  ngOnDestroy(): void {
    this.subscriptionUsers.forEach(subscription => subscription.unsubscribe());
  }

  private loadUsers(): void {
    this.subscriptionUsers.push(this.userService.getUsers().subscribe(users => {
      this.users = users as User[];
    }));
  }
}
