import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Task } from '../models/Task';
import { HomePageComponent } from '../../home-page/home-page.component';

@Injectable()
export class DetailsService {
  private taskSource = new BehaviorSubject(new Task());
  private subscriptionsOnTasksSource = new BehaviorSubject([]);
  private homePageComponentSource = new BehaviorSubject(new HomePageComponent());

  currentTask = this.taskSource.asObservable();
  currentSubscriptionsOnTasks = this.subscriptionsOnTasksSource.asObservable();
  currentHomePageComponent = this.homePageComponentSource.asObservable();

  constructor() {
  }

  changeTask(task: Task) {
    this.taskSource.next(task);
  }

  changeSubscriptionsOnTasks(subscriptionsOnTasks: Subscription[]) {
    this.subscriptionsOnTasksSource.next(subscriptionsOnTasks);
  }

  changeHomePageComponent(homePageComponent: HomePageComponent) {
    this.homePageComponentSource.next(homePageComponent);
  }
}
