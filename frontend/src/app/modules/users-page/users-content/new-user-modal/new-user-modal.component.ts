import { Component, OnDestroy, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Subscription } from 'rxjs';
import { User } from '../../../shared/models/User';
import { UserService } from '../../../shared/services/user.service';
import { UsersPageComponent } from '../../users-page.component';
import { Project } from '../../../shared/models/Project';
import { Role } from '../../../shared/models/Role';
import { RoleService } from '../../../shared/services/role.service';

@Component({
  selector: 'app-new-user-modal',
  templateUrl: './new-user-modal.component.html',
})
export class NewUserModalComponent implements OnInit, OnDestroy {

  addedUser: User;
  editableUser: User;
  projects: Project[];
  roles: Role[];
  subscriptionsOnUsers: Subscription[];
  subscriptionsOnRoles: Subscription[] = [];
  usersPageComponent: UsersPageComponent;
  editMode: boolean;

  constructor(public bsModalRef: BsModalRef, private userService: UserService,
              private roleService: RoleService) {
  }

  ngOnInit() {
    if (this.addedUser) {
      this.editableUser = User.clone(this.addedUser);
      this.editableUser.password = this.editableUser.password;
    } else {
      this.editableUser = new User();
    }
    this.loadRoles();
  }

  public save(): void {
    this.addedUser = User.clone(this.editableUser);
    this.addedUser.password = this.addedUser.password;
    this.subscriptionsOnUsers.push(this.userService.save(this.addedUser).subscribe(() => {
      this.usersPageComponent.updateUsers();
      this.bsModalRef.hide();
    }));
  }

  compareRoles(role: Role, anotherRole: Role): boolean {
    return role && anotherRole ? role.id === anotherRole.id : role === anotherRole;
  }

  ngOnDestroy() {
    this.subscriptionsOnRoles.forEach(role => role.unsubscribe());
  }

  private loadRoles(): void {
    this.subscriptionsOnRoles.push(this.roleService.findAll().subscribe(roles => {
      this.roles = roles as Role[];
    }));
  }
}
