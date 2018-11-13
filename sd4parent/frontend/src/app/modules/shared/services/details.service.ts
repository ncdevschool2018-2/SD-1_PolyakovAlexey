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

// @Injectable()
// export class DetailsService {
//
//   private taskObservable$: Observable<Task>;
//   private taskObserver: Observer<Task>;
//
//   constructor() {
//     this.taskObservable$ =
//       Observable.create((observer: Observer<Task>) => this.taskObserver = observer).pipe(share());
//   }
//
//   getTaskObservable$() {
//     console.log('getTaskObservable$()');
//     return this.taskObservable$;
//   }
//
//   setTaskObservable(task: Task) {
//     console.log('setTaskObservable()');
//     if (this.taskObserver) {
//       this.taskObserver.next(task);
//     }
//   }
// }
