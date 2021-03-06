import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../shared/models/Task';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.css']
})
export class TasksTableComponent {
  @Input() tasks: Task[];
  @Input() currentUser;

  @Output() edited = new EventEmitter<Task>();
  @Output() detailed = new EventEmitter<Task>();
  @Output() deleted = new EventEmitter<Task>();
}


