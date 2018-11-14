import { Component, OnDestroy, OnInit } from '@angular/core';
import { DetailsService } from '../shared/services/details.service';
import { Task } from '../shared/models/Task';
import { Subscription } from 'rxjs';
import { Constans } from '../shared/models/Constans';
import { ViewPipe } from '../shared/pipes/view.pipe';
import { EnumPipe } from '../shared/pipes/enum.pipe';

@Component({
  selector: 'app-task-details-page',
  templateUrl: './task-details-page.component.html',
  styleUrls: ['./task-details-page.component.css'],
})
export class TaskDetailsPageComponent implements OnInit, OnDestroy {
  task: Task;
  editableTask: Task;
  subscriptionTask: Subscription;

  priorities = Object.values(Constans.priorities);
  editMode: boolean;

  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  constructor(private detailsService: DetailsService, private viewPipe: ViewPipe,
              private enumPipe: EnumPipe) {
  }

  save() {
    if (Task.isEqual(this.task, this.editableTask)) {
      // todo: add alert
      console.log('No data has been changed.');
    } else {
      this.editableTask.priority = this.enumPipe.transform(this.editableTask.priority);
      this.task = Task.cloneBase(this.editableTask);
      this.detailsService.changeTask(this.task);
      // todo: add alert
      console.log('Data changed.');
    }
  }

  toogleEdit() {
    this.editMode = this.editMode ? false : true;
  }

  ngOnInit() {
    this.editMode = false;
    this.subscriptionTask = this.detailsService.currentTask.subscribe(newTask => this.task = newTask);
    this.editableTask = Task.cloneBase(this.task);
    this.editableTask.priority = this.viewPipe.transform(this.editableTask.priority);
  }

  ngOnDestroy() {
    this.subscriptionTask.unsubscribe();
  }

}
