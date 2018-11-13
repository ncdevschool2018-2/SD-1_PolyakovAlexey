import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../shared/models/User';
import { BsModalService } from 'ngx-bootstrap';
import { Subscription } from 'rxjs';
import { UserService } from '../shared/services/user.service';
import { NewUserModalComponent } from './users-content/new-user-modal/new-user-modal.component';
import { Project } from '../shared/models/Project';
import { ProjectService } from '../shared/services/project.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html'
})
export class UsersPageComponent implements OnInit, OnDestroy {
  users: User[];
  subscriptionsOnUsers: Subscription[] = [];

  projects: Project[];
  subscriptionsOnProjects: Subscription[] = [];

  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  constructor(private modalService: BsModalService, private userService: UserService,
              private projectService: ProjectService) {
  }

  ngOnInit() {
    this.loadUsers();
    this.loadProjects();
  }

  onAdded() {
    const initialState = {
      subscriptionsOnUsers: this.subscriptionsOnUsers,
      projects: this.projects,
      usersPageComponent: this,
      editMode: false
    };
    this.modalService.show(NewUserModalComponent, {initialState});
  }

  onEdited(user: User) {
    const initialState = {
      user: user,
      subscriptionsOnUsers: this.subscriptionsOnUsers,
      projects: this.projects,
      usersPageComponent: this,
      editMode: true
    };
    this.modalService.show(NewUserModalComponent, {initialState});
  }

  onDeleted(user: User): void {
    this.subscriptionsOnUsers.push(this.userService.deleteUser(user.id).subscribe(() => {
      this.updateUsers();
    }));
  }

  updateUsers(): void {
    this.loadUsers();
  }

  ngOnDestroy(): void {
    this.subscriptionsOnUsers.forEach(subscription => subscription.unsubscribe());
    this.subscriptionsOnProjects.forEach(subscription => subscription.unsubscribe());
  }

  private loadProjects(): void {
    this.subscriptionsOnProjects.push(this.projectService.getProjects().subscribe(projects => {
      this.projects = projects as Project[];
    }));
  }

  private loadUsers(): void {
    this.subscriptionsOnUsers.push(this.userService.getUsers().subscribe(users => {
      this.users = users as User[];
    }));
  }
}
