import { Component, OnDestroy, OnInit } from '@angular/core';
import { DetailsService } from '../shared/services/details.service';
import { Task } from '../shared/models/Task';
import { Subscription } from 'rxjs';
import { Constans } from '../shared/models/Constans';
import { ViewPipe } from '../shared/pipes/view.pipe';
import { EnumPipe } from '../shared/pipes/enum.pipe';
import { TaskService } from '../shared/services/task.service';

@Component({
  selector: 'app-task-details-page',
  templateUrl: './task-details-page.component.html',
  styleUrls: ['./task-details-page.component.css'],
})
export class TaskDetailsPageComponent implements OnInit, OnDestroy {
  // todo: create modal window to assign button. Disable assign field
  task: Task;
  editableTask: Task;
  subscriptionsOnTasks: Subscription[];

  subscriptionOnTask: Subscription;
  subscriptionOnSubscriptionsOnTasks: Subscription;

  // users: Users[];
  // subscriptionsOnUsers: Subscription[];

  priorities = Object.values(Constans.priorities);
  editMode = false;

  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  constructor(private detailsService: DetailsService, private viewPipe: ViewPipe,
              private enumPipe: EnumPipe, private taskService: TaskService) {
  }

  save() {
    if (Task.isEqual(this.task, this.editableTask)) {
      // todo: add bootstrap alert
      console.log('No data has been changed.');
    } else {
      this.task = Task.cloneBase(this.editableTask);
      this.task.priority = this.enumPipe.transform(this.task.priority);
      this.subscriptionsOnTasks.push(this.taskService.saveTask(this.task).subscribe());
      // todo: add bootstrap alert
      console.log('Data changed.');
    }
  }

  changeStatus(status: string) {
    this.editableTask.status = status;
  }

  toogleEdit() {
    this.editMode = !this.editMode;
  }

  ngOnInit() {
    this.subscriptionOnSubscriptionsOnTasks = this.detailsService.currentSubscriptionsOnTasks.subscribe(currentSubscriptionsOnTasks =>
      this.subscriptionsOnTasks = currentSubscriptionsOnTasks);

    this.subscriptionOnTask = this.detailsService.currentTask.subscribe(currentTask =>
      this.task = currentTask);

    this.editableTask = Task.cloneBase(this.task);
    this.editableTask.priority = this.viewPipe.transform(this.editableTask.priority);
  }

  ngOnDestroy() {
    this.subscriptionOnSubscriptionsOnTasks.unsubscribe();
    this.subscriptionOnTask.unsubscribe();
  }
}
