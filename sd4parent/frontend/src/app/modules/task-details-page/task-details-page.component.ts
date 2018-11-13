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
  private taskSubscription: Subscription;

  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  constructor(private detailsService: DetailsService) {
  }

  ngOnInit() {
    console.log('ngOnInit()');
    this.taskSubscription = this.detailsService.getTaskObservable$().subscribe(task => {
      console.log('current task: ' + task);
      this.task = task;
    });
  }

  ngOnDestroy() {
    this.taskSubscription.unsubscribe();
  }
}
