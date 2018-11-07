import {Component, OnInit} from '@angular/core';
import {User} from "../../../model/User";
import {Subscription} from "rxjs";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  public users: User[];

  private subscriptions: Subscription[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.loadUsers();
  }

  public deleteUser(id: string): void {
    this.subscriptions.push(this.userService.deleteUser(id).subscribe(() => {
      this.updateUsers();
    }));
  }

  public updateUsers(): void {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.subscriptions.push(this.userService.getUsers().subscribe(users => {
      this.users = users as User[];
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
