import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../shared/models/User';
import { BsModalService } from 'ngx-bootstrap';
import { Subscription } from 'rxjs';
import { UserService } from '../shared/services/user.service';
import { NewUserModalComponent } from './users-content/new-user-modal/new-user-modal.component';
import { Project } from '../shared/models/Project';
import { ProjectService } from '../shared/services/project.service';
import { LoginUserService } from '../shared/services/login-user.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html'
})
export class UsersPageComponent implements OnInit, OnDestroy {

  users: User[];
  projects: Project[];
  currentUser: User;
  subscriptionsOnUsers: Subscription[] = [];
  subscriptionsOnProjects: Subscription[] = [];
  subscriptionOnCurrentUser: Subscription;

  constructor(private modalService: BsModalService, private userService: UserService,
              private projectService: ProjectService, private loginUserService: LoginUserService) {
  }

  ngOnInit() {
    this.loadUsers();
    this.loadProjects();
    this.subscriptionOnCurrentUser = this.loginUserService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
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
      addedUser: user,
      subscriptionsOnUsers: this.subscriptionsOnUsers,
      projects: this.projects,
      usersPageComponent: this,
      editMode: true
    };
    this.modalService.show(NewUserModalComponent, {initialState});
  }

  onDeleted(user: User): void {
    this.subscriptionsOnUsers.push(this.userService.deleteById(user.id).subscribe(() => {
      this.updateUsers();
    }));
  }

  updateUsers(): void {
    this.loadUsers();
  }

  ngOnDestroy(): void {
    this.subscriptionsOnUsers.forEach(subscription => subscription.unsubscribe());
    this.subscriptionsOnProjects.forEach(subscription => subscription.unsubscribe());
    this.subscriptionOnCurrentUser.unsubscribe();
  }

  private loadProjects(): void {
    this.subscriptionsOnProjects.push(this.projectService.findAll().subscribe(projects => {
      this.projects = projects as Project[];
    }));
  }

  private loadUsers(): void {
    this.subscriptionsOnUsers.push(this.userService.findAll().subscribe(users => {
      this.users = users as User[];
    }));
  }
}
