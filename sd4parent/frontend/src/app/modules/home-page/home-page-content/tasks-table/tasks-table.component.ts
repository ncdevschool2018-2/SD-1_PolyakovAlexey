import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../../../shared/models/Task";
import {DetailsService} from "../../../shared/services/details.service";

@Component({
  selector: 'tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.css']
})
export class TasksTableComponent {
  @Input() tasks: Task[];
  @Input() currentUser;

  @Output() onEdited = new EventEmitter<Task>();
  @Output() onDeleted = new EventEmitter<Task>();


  constructor(private data: DetailsService) {

  }

  edit(task: Task) {
    this.onEdited.emit(task);
  }

  details(task: Task) {
    this.data.setTask(task);
  }

  delete(task: Task) {
    this.onDeleted.emit(task);
  }
}


