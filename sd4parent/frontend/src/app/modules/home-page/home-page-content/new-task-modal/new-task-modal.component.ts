import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Task } from '../../../shared/models/Task';
import { User } from '../../../shared/models/User';
import { TaskService } from '../../../shared/services/task.service';
import { Subscription } from 'rxjs';
import { HomePageComponent } from '../../home-page.component';
import { Project } from '../../../shared/models/Project';
import { Constans } from '../../../shared/models/Constans';
import { ViewPipe } from '../../../shared/pipes/view.pipe';
import { EnumPipe } from '../../../shared/pipes/enum.pipe';

@Component({
  selector: 'app-new-task-modal',
  templateUrl: './new-task-modal.component.html',
})
export class NewTaskModalComponent implements OnInit {
  task: Task;
  editableTask: Task;
  tasks: Task[];
  subscriptionsOnTasks: Subscription[];

  users: User[];
  assignee: string;

  projects: Project[];
  projectCode: string;

  homePageComponent: HomePageComponent;
  editMode: boolean;
  priorities = Object.values(Constans.priorities);
  currentUser: User;

  constructor(private bsModalRef: BsModalRef, public taskService: TaskService, private enumPipe: EnumPipe,
              private viewPipe: ViewPipe) {
  }

  ngOnInit() {
    if (this.task) {
      this.editableTask = Task.cloneBase(this.task);
      this.editableTask.priority = this.viewPipe.transform(this.editableTask.priority);
      this.assignee = this.editableTask.assignee.username;
      this.projectCode = this.editableTask.project.code;
    } else {
      this.editableTask = new Task();
    }
  }

  save(): void {
    this.editableTask.project = this.getProjectByCode(this.projectCode);
    this.editableTask.assignee = this.getUserByUsername(this.assignee);
    this.editableTask.code = this.calculateTicketCode(this.projectCode);
    if (!this.editMode) {
      this.editableTask.reporter = this.currentUser;
    }

    this.task = Task.cloneBase(this.editableTask);
    this.task.priority = this.enumPipe.transform(this.task.priority);
    this.subscriptionsOnTasks.push(this.taskService.saveTask(this.task).subscribe(() => {
      this.homePageComponent.updateTasks();
      this.closeModal();
    }));
  }

  private getProjectByCode(code: string): Project {
    let project: Project;
    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i].code === code) {
        project = this.projects[i];
      }
    }
    return project;
  }

  private getUserByUsername(username: string): User {
    let user: User;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].username === username) {
        user = this.users[i];
      }
    }
    return user;
  }

  private calculateTicketCode(code: string): string {
    if (this.task && this.task.project.code === code) {
      return this.task.code;
    }
    let numberOfTasks = 0;
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].project.code === code) {
        numberOfTasks++;
      }
    }
    return code + ' - ' + (numberOfTasks + 1);
  }

  private closeModal() {
    this.bsModalRef.hide();
  }
}
