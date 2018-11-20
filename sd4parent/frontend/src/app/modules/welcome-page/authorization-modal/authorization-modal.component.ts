import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { User } from '../../shared/models/User';
import { Subscription } from 'rxjs';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { TokenStorageService } from '../../shared/services/token-storage.service';

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
              private router: Router, private authService: AuthService, private token: TokenStorageService) {
  }

  signIn(): void {

    this.authService.attemptAuth(this.editableUser.username, this.editableUser.password).subscribe(
      data => {
        this.user = this.getCheckedUser(this.editableUser);

        alert(this.user);
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        this.token.saveToken(data.token);
        this.closeModal();
        this.router.navigate(['/home']);
      }
    );
  }

  // signIn(): void {
  //   this.user = this.getCheckedUser(this.editableUser);
  //   if (this.user) {
  //     localStorage.setItem('currentUser', JSON.stringify(this.user));
  //     this.router.navigate(['/home']);
  //     this.closeModal();
  //   } else {
  //     // todo: add bootstrap alert
  //     console.log('incorrect password or username');
  //   }
  // }

  getCheckedUser(user: User): User {
    let checkedUser: User;
    for (let i = 0; i < this.users.length; i++) {
      console.log('>>>> username =' + this.users[i].username);
      console.log('>>>> password =' + this.users[i].password);
      if (this.users[i].username === user.username) {
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
