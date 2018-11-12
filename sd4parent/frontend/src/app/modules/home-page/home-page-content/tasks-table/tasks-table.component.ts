import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../shared/models/Task';
import { DetailsService } from '../../../shared/services/details.service';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.css']
})
export class TasksTableComponent {
  @Input() tasks: Task[];
  @Input() currentUser;

  @Output() edited = new EventEmitter<Task>();
  @Output() deleted = new EventEmitter<Task>();


  constructor(private data: DetailsService) {

  }

  edit(task: Task) {
    this.edited.emit(task);
  }

  details(task: Task) {
    this.data.setTask(task);
  }

  delete(task: Task) {
    this.deleted.emit(task);
  }
}


