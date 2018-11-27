import { Component, OnDestroy, OnInit } from '@angular/core';
import { DetailsService } from '../shared/services/details.service';
import { Task } from '../shared/models/Task';
import { Subscription } from 'rxjs';
import { TaskService } from '../shared/services/task.service';
import { User } from '../shared/models/User';
import { PriorityService } from '../shared/services/priority.service';
import { Priority } from '../shared/models/Priority';
import { UserService } from '../shared/services/user.service';
import { StatusService } from '../shared/services/status.service';
import { Status } from '../shared/models/Status';
import { LoginUserService } from '../shared/services/login-user.service';

@Component({
  selector: 'app-task-details-page',
  templateUrl: './task-details-page.component.html',
  styleUrls: ['./task-details-page.component.css'],
})
export class TaskDetailsPageComponent implements OnInit, OnDestroy {

  changedTask: Task;
  editableTask: Task;
  users: User[];
  priorities: Priority[];
  currentUser: User;
  subscriptionsOnPriorities: Subscription[] = [];
  subscriptionsOnUsers: Subscription[] = [];
  subscriptionsOnTasks: Subscription[];
  subscriptionOnCurrentUser: Subscription;
  subscriptionOnTask: Subscription;
  subscriptionOnSubscriptionsOnTasks: Subscription;
  editMode = false;

  constructor(private detailsService: DetailsService, private taskService: TaskService,
              private priorityService: PriorityService, private userService: UserService,
              private statusService: StatusService, private loginUserService: LoginUserService) {
  }

  ngOnInit() {
    this.subscriptionOnSubscriptionsOnTasks = this.detailsService.currentSubscriptionsOnTasks.subscribe(currentSubscriptionsOnTasks =>
      this.subscriptionsOnTasks = currentSubscriptionsOnTasks);

    this.subscriptionOnTask = this.detailsService.currentTask.subscribe(currentTask => this.changedTask = currentTask);
    this.editableTask = Task.clone(this.changedTask);
    if (!this.editableTask.assignee) {
      this.editableTask.assignee = new User();
      this.editableTask.assignee.username = '';
    }
    this.loadPriorities();
    this.loadUsers();
    this.subscriptionOnCurrentUser = this.loginUserService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  save() {
    if (Task.compare(this.changedTask, this.editableTask)) {
      console.log('No data has been changed.');// todo: add bootstrap alert
    } else {
      this.editableTask.updated = new Date(Date.now());
      this.changedTask = Task.clone(this.editableTask);
      this.subscriptionsOnTasks.push(this.taskService.save(this.changedTask).subscribe());
      console.log('Data changed.');// todo: add bootstrap alert
    }
  }

  changeStatus(name: string) {
    this.statusService.findByName(name).subscribe(status => {
      this.editableTask.status = status as Status;
    });
    if (name === 'open') {
      this.editableTask.closed = null;
    } else if (name === 'closed') {
      this.editableTask.closed = new Date(Date.now());
    }
  }

  toogleEdit() {
    this.editMode = !this.editMode;
  }

  comparePriorities(priority: Priority, anotherPriority: Priority): boolean {
    return priority && anotherPriority ? priority.id === anotherPriority.id : priority === anotherPriority;
  }

  compareUsers(user: User, anotherUser: User): boolean {
    return user && anotherUser ? user.id === anotherUser.id : user === anotherUser;
  }

  ngOnDestroy() {
    this.subscriptionOnSubscriptionsOnTasks.unsubscribe();
    this.subscriptionOnTask.unsubscribe();
    this.subscriptionsOnUsers.forEach(user => user.unsubscribe());
    this.subscriptionsOnPriorities.forEach(role => role.unsubscribe());
    this.subscriptionOnCurrentUser.unsubscribe();
  }

  private loadPriorities(): void {
    this.subscriptionsOnPriorities.push(this.priorityService.findAll().subscribe(priorities => {
      this.priorities = priorities as Priority[];
    }));
  }

  private loadUsers(): void {
    this.subscriptionsOnUsers.push(this.userService.findAll().subscribe(users => {
      this.users = users as User[];
    }));
  }
}
