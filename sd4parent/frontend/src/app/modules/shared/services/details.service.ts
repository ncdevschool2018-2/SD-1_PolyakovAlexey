import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/Task';

@Injectable()
export class DetailsService {
  private taskSource = new BehaviorSubject(new Task());
  currentTask = this.taskSource.asObservable();

  constructor() {

  }

  changeTask(task: Task) {
    this.taskSource.next(task);
  }
}
