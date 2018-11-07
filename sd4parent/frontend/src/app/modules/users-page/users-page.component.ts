import {Component} from '@angular/core';
import {User} from "../shared/models/User";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {Subscription} from "rxjs";
import {UserService} from "../shared/services/user.service";
import {NewUserModalComponent} from "../shared/components/new-user-modal/new-user-modal.component";

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html'
})
export class UsersPageComponent {
  users: User[];
  bsModalRef: BsModalRef;

  subscriptionUsers: Subscription[] = [];

  constructor(private modalService: BsModalService, private userService: UserService) {
  }

  ngOnInit() {
    this.loadUsers();
  }

  onEdited(user: User) {
    const initialState = {
      user: user,
      editMode: true,
      subscriptionUsers: this.subscriptionUsers,
      usersComponent: this
    };
    this.bsModalRef = this.modalService.show(NewUserModalComponent, {initialState});
  }

  public onDeleted(id: string): void {
    this.subscriptionUsers.push(this.userService.deleteUser(id).subscribe(() => {
      this.updateUsers();
    }));
  }

  public updateUsers(): void {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.subscriptionUsers.push(this.userService.getUsers().subscribe(users => {
      this.users = users as User[];
    }));
  }

  ngOnDestroy(): void {
    this.subscriptionUsers.forEach(subscription => subscription.unsubscribe());
  }
}
