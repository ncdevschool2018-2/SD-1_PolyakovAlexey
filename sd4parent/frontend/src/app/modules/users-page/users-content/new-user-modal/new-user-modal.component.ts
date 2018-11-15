import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Subscription } from 'rxjs';
import { User } from '../../../shared/models/User';
import { UserService } from '../../../shared/services/user.service';
import { UsersPageComponent } from '../../users-page.component';
import { Constans } from '../../../shared/models/Constans';
import { EnumPipe } from '../../../shared/pipes/enum.pipe';
import { ViewPipe } from '../../../shared/pipes/view.pipe';
import { Project } from '../../../shared/models/Project';

@Component({
  selector: 'app-new-user-modal',
  templateUrl: './new-user-modal.component.html',
})
export class NewUserModalComponent implements OnInit {
  user: User;
  editableUser: User;
  subscriptionsOnUsers: Subscription[];
  projects: Project[];
  currentProjectCode: string;

  usersPageComponent: UsersPageComponent;
  roles = Object.values(Constans.roles);
  editMode: boolean;

  constructor(public bsModalRef: BsModalRef, private userService: UserService, private viewPipe: ViewPipe,
              private enumPipe: EnumPipe) {
  }

  ngOnInit() {
    if (this.user) {
      this.editableUser = User.cloneBase(this.user);
      this.editableUser.role = this.viewPipe.transform(this.editableUser.role);
      this.currentProjectCode = this.getProjectCodeById(this.editableUser.currentProjectId);
    } else {
      this.editableUser = new User();
    }
  }

  public save(): void {
    this.editableUser.currentProjectId = this.getProjectIdByCode(this.currentProjectCode);
    this.user = User.cloneBase(this.editableUser);
    this.user.role = this.enumPipe.transform(this.user.role);
    this.subscriptionsOnUsers.push(this.userService.saveUser(this.user).subscribe(() => {
      this.usersPageComponent.updateUsers();
      this.closeModal();
    }));
  }

  private getProjectIdByCode(code: string) {
    let id = -1;
    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i].code === code) {
        id = this.projects[i].id;
      }
    }
    return id;
  }

  private getProjectCodeById(id: number) {
    let code = '';
    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i].id === id) {
        code = this.projects[i].code;
      }
    }
    return code;
  }

  closeModal() {
    this.bsModalRef.hide();
  }
}
