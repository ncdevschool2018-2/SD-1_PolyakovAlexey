import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Task } from '../models/Task';

@Injectable()
export class DetailsService {
  private taskSource = new BehaviorSubject(new Task());
  currentTask = this.taskSource.asObservable();

  private subscriptionsOnTasksSource = new BehaviorSubject([]);
  currentSubscriptionsOnTasks = this.subscriptionsOnTasksSource.asObservable();

  constructor() {
  }

  changeTask(task: Task) {
    this.taskSource.next(task);
  }

  changeSubscriptionsOnTasks(subscriptionsOnTasks: Subscription[]) {
    this.subscriptionsOnTasksSource.next(subscriptionsOnTasks);
  }
}
