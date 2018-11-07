import {Component} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";
import {Subscription} from "rxjs";
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";
import {UserRole} from "../../models/enums/UserRole";
import {UsersPageComponent} from "../../../users-page/users-page.component";

@Component({
  selector: 'new-user-modal',
  templateUrl: './new-user-modal.component.html',
})
export class NewUserModalComponent {
  editableUser: User;
  user: User;
  subscriptionUsers: Subscription[];
  usersComponent: UsersPageComponent;
  editMode: boolean;
  roles = UserRole;

  constructor(public bsModalRef: BsModalRef, public userService: UserService) {
  }

  ngOnInit() {
    if (this.user) {
      this.editableUser = User.cloneBase(this.user);
    }
    else {
      this.editableUser = new User();
    }
  }

  public save(): void {
    this.user = User.cloneBase(this.editableUser);
    this.user.role = this.user.role.toUpperCase();
    this.subscriptionUsers.push(this.userService.saveUser(this.user).subscribe(() => {
      this.usersComponent.updateUsers();
      this.closeModal();
    }));
  }

  closeModal() {
    this.bsModalRef.hide();
  }
}
