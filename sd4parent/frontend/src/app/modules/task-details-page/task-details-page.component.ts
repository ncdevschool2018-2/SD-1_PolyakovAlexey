import { Component, OnDestroy, OnInit } from '@angular/core';
import { DetailsService } from '../shared/services/details.service';
import { Task } from '../shared/models/Task';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-details-page',
  templateUrl: './task-details-page.component.html',
  styleUrls: ['./task-details-page.component.css'],
})
export class TaskDetailsPageComponent implements OnInit, OnDestroy {
  task: Task;
  subscriptionTask: Subscription;

  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  constructor(private detailsService: DetailsService) {
  }

  ngOnInit() {
    console.log('ngOnInit()');
    this.subscriptionTask = this.detailsService.currentTask.subscribe(newTask => this.task = newTask);
    console.log('current this.task: ' + this.task);
  }

  ngOnDestroy() {
    this.subscriptionTask.unsubscribe();
  }

}
