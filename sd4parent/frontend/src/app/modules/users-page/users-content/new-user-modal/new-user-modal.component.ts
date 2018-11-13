import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Subscription } from 'rxjs';
import { User } from '../../../shared/models/User';
import { UserService } from '../../../shared/services/user.service';
import { UsersPageComponent } from '../../users-page.component';
import { Constans } from '../../../shared/models/Constans';
import { EnumPipe } from '../../../shared/pipes/enum.pipe';

@Component({
  selector: 'app-new-user-modal',
  templateUrl: './new-user-modal.component.html',
})
export class NewUserModalComponent implements OnInit {
  user: User;
  editableUser: User;
  subscriptionUsers: Subscription[];

  usersComponent: UsersPageComponent;
  editMode: boolean;
  roles = Object.values(Constans.roles);

  constructor(public bsModalRef: BsModalRef, public userService: UserService, private enumPipe: EnumPipe) {
  }

  ngOnInit() {
    if (this.user) {
      this.editableUser = User.cloneBase(this.user);
    } else {
      this.editableUser = new User();
    }
  }

  public save(): void {
    this.user = User.cloneBase(this.editableUser);
    this.user.role = this.enumPipe.transform(this.user.role);
    this.subscriptionUsers.push(this.userService.saveUser(this.user).subscribe(() => {
      this.usersComponent.updateUsers();
      this.closeModal();
    }));
  }

  closeModal() {
    this.bsModalRef.hide();
  }
}
