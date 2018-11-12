import {Injectable} from '@angular/core';
import {Task} from "../models/Task";

@Injectable({
  providedIn: 'root'
})

export class DetailsService {
  private task: Task;

  constructor() {
    console.log("this is the default task");
  }

  setTask(task: Task) {
    console.log("this is the task");
    console.log(task);
    this.task = task;
  }

  getTask(): Task {
    console.log("get fucking task");
    return this.task;
  }
}
