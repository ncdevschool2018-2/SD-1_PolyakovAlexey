import { Component, OnDestroy, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Task } from '../../../shared/models/Task';
import { User } from '../../../shared/models/User';
import { TaskService } from '../../../shared/services/task.service';
import { Subscription } from 'rxjs';
import { HomePageComponent } from '../../home-page.component';
import { Project } from '../../../shared/models/Project';
import { Priority } from '../../../shared/models/Priority';
import { PriorityService } from '../../../shared/services/priority.service';

@Component({
  selector: 'app-new-task-modal',
  templateUrl: './new-task-modal.component.html',
})
export class NewTaskModalComponent implements OnInit, OnDestroy {

  addedTask: Task;
  editableTask: Task;
  tasks: Task[];
  users: User[];
  projects: Project[];
  priorities: Priority[];
  currentUser: User;
  subscriptionsOnTasks: Subscription[];
  subscriptionsOnPriorities: Subscription[] = [];
  homePageComponent: HomePageComponent;
  editMode: boolean;

  constructor(public bsModalRef: BsModalRef, public taskService: TaskService,
              public priorityService: PriorityService) {
  }

  ngOnInit() {
    if (this.addedTask) {
      this.editableTask = Task.clone(this.addedTask);
      if (!this.editableTask.assignee) {
        this.editableTask.assignee = new User();
        this.editableTask.assignee.username = '';
      }
    } else {
      this.editableTask = new Task();
    }
    this.loadPriorities();
  }

  save(): void {
    this.editableTask.code = this.calculateTicketCode(this.editableTask.project.code);
    if (!this.editMode) {
      this.editableTask.reporter = this.currentUser;
    }
    this.editableTask.updated = new Date(Date.now());
    this.addedTask = Task.clone(this.editableTask);
    // if (this.addedTask.assignee.username === '') { <!-- todo: check for null assignee-->
    //   this.addedTask.assignee.username = null;
    // }
    this.subscriptionsOnTasks.push(this.taskService.save(this.addedTask).subscribe(() => {
      this.homePageComponent.updateTasks();
      this.bsModalRef.hide();
    }));
  }

  compareProjects(project: Project, anotherProject: Project): boolean {
    return project && anotherProject ? project.id === anotherProject.id : project === anotherProject;
  }

  comparePriorities(priority: Priority, anotherPriority: Priority): boolean {
    return priority && anotherPriority ? priority.id === anotherPriority.id : priority === anotherPriority;
  }

  compareUsers(user: User, anotherUser: User): boolean {
    return user && anotherUser ? user.id === anotherUser.id : user === anotherUser;
  }

  ngOnDestroy() {
    this.subscriptionsOnPriorities.forEach(role => role.unsubscribe());
  }

  private loadPriorities(): void {
    this.subscriptionsOnPriorities.push(this.priorityService.findAll().subscribe(priorities => {
      this.priorities = priorities as Priority[];
    }));
  }

  private calculateTicketCode(code: string): string {
    if (this.addedTask && this.addedTask.project.code === code) {
      return this.addedTask.code;
    }
    let numberOfTasks = 0;
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].project.code === code) {
        numberOfTasks++;
      }
    }
    return code + ' - ' + (numberOfTasks + 1);
  }
}
