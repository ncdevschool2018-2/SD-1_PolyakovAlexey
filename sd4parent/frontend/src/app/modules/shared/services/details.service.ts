import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Task } from '../models/Task';
import { share } from 'rxjs/operators';

@Injectable()
export class DetailsService {

  private taskObservable$: Observable<Task>;
  private taskObserver: Observer<Task>;

  constructor() {
    this.taskObservable$ =
      Observable.create((observer: Observer<Task>) => this.taskObserver = observer).pipe(share());
  }

  getTaskObservable$() {
    console.log('getTaskObservable$()');
    return this.taskObservable$;
  }

  setTaskObservable(task: Task) {
    console.log('setTaskObservable()');
    if (this.taskObserver) {
      this.taskObserver.next(task);
    }
  }
}
