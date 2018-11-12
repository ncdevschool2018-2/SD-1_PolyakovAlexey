import {Component} from '@angular/core';
import {DetailsService} from "../shared/services/details.service";
import {Task} from "../shared/models/Task";

@Component({
  selector: 'app-task-details-page',
  templateUrl: './task-details-page.component.html',
  styleUrls: ['./task-details-page.component.css'],
})
export class TaskDetailsPageComponent {
  public task: Task;
  currentUser = JSON.parse(localStorage.getItem('currentUser'))

  constructor(private data: DetailsService) {
    this.task = this.data.getTask();
  }
}
