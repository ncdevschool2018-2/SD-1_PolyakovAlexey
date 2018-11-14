import { Component, OnDestroy, OnInit } from '@angular/core';
import { DetailsService } from '../shared/services/details.service';
import { Task } from '../shared/models/Task';
import { Subscription } from 'rxjs';
import { Constans } from '../shared/models/Constans';
import { ViewPipe } from '../shared/pipes/view.pipe';
import { EnumPipe } from '../shared/pipes/enum.pipe';
import { TaskService } from '../shared/services/task.service';
import { HomePageComponent } from '../home-page/home-page.component';

@Component({
  selector: 'app-task-details-page',
  templateUrl: './task-details-page.component.html',
  styleUrls: ['./task-details-page.component.css'],
})
export class TaskDetailsPageComponent implements OnInit, OnDestroy {
  task: Task;
  editableTask: Task;
  subscriptionsOnTasks: Subscription[];
  homePageComponent: HomePageComponent;

  subscriptionOnTask: Subscription;
  subscriptionOnSubscriptionsOnTasks: Subscription;
  subscriptionOnHomePageComponent: Subscription;

  priorities = Object.values(Constans.priorities);
  editMode = false;

  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  constructor(private detailsService: DetailsService, private viewPipe: ViewPipe,
              private enumPipe: EnumPipe, private taskService: TaskService) {
  }

  save() {
    if (Task.isEqual(this.task, this.editableTask)) {
      // todo: add alert
      console.log('No data has been changed.');
    } else {
      this.editableTask.priority = this.enumPipe.transform(this.editableTask.priority);
      this.task = Task.cloneBase(this.editableTask);
      this.subscriptionsOnTasks.push(this.taskService.saveTask(this.task).subscribe(() => {
        this.homePageComponent.updateTasks();
      }));
      // todo: add alert
      console.log('Data changed.');
    }
  }

  toogleEdit() {
    this.editMode = !this.editMode;
  }

  ngOnInit() {
    this.subscriptionOnSubscriptionsOnTasks = this.detailsService.currentSubscriptionsOnTasks.subscribe(currentSubscriptionsOnTasks =>
      this.subscriptionsOnTasks = currentSubscriptionsOnTasks);

    this.subscriptionOnHomePageComponent = this.detailsService.currentHomePageComponent.subscribe(currentHomePageComponent =>
      this.homePageComponent = currentHomePageComponent);

    this.subscriptionOnTask = this.detailsService.currentTask.subscribe(currentTask =>
      this.task = currentTask);

    this.editableTask = Task.cloneBase(this.task);
    this.editableTask.priority = this.viewPipe.transform(this.editableTask.priority);
  }

  ngOnDestroy() {
    this.subscriptionOnSubscriptionsOnTasks.unsubscribe();
    this.subscriptionOnHomePageComponent.unsubscribe();
    this.subscriptionOnTask.unsubscribe();
  }
}
