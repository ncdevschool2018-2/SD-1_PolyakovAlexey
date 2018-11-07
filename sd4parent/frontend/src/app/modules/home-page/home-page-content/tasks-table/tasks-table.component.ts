import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../../../shared/models/Task";

@Component({
  selector: 'tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.css']
})
export class TasksTableComponent {
  @Input() tasks: Task[];

  @Output() onEdited = new EventEmitter<Task>();
  @Output() onDeleted = new EventEmitter<string>();


  edit(task: Task) {
    this.onEdited.emit(task);
  }

  delete(id: string) {
    this.onDeleted.emit(id);
  }
}


