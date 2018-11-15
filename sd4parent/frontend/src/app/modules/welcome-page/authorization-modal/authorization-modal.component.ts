import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { User } from '../../shared/models/User';
import { Subscription } from 'rxjs';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization-modal',
  templateUrl: './authorization-modal.component.html',
  styleUrls: ['./authorization-modal.component.css']
})
export class AuthorizationModalComponent implements OnInit {
  user: User;
  editableUser: User;

  users: User[];
  subscriptionsOnUsers: Subscription[] = [];

  constructor(public bsModalRef: BsModalRef, private userService: UserService,
              private router: Router) {
  }

  signIn(): void {
    this.user = this.getCheckedUser(this.editableUser);
    if (this.user) {
      localStorage.setItem('currentUser', JSON.stringify(this.user));
      this.router.navigate(['/home']);
      this.closeModal();
    } else {
      // todo: add bootstrap alert
      console.log('incorrect password or username');
    }
  }

  getCheckedUser(user: User): User {
    let checkedUser: User;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].username === user.username && this.users[i].password === user.password) {
        checkedUser = this.users[i];
      }
    }
    return checkedUser;
  }


  closeModal() {
    this.bsModalRef.hide();
  }

  ngOnInit() {
    this.editableUser = new User();
    this.loadUsers();
  }

  private loadUsers(): void {
    this.subscriptionsOnUsers.push(this.userService.getUsers().subscribe(users => {
      this.users = users as User[];
    }));
  }
}
