import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Task } from '../../../shared/models/Task';
import { DetailsService } from '../../../shared/services/details.service';
import { Subscription } from 'rxjs';
import { TaskService } from '../../../shared/services/task.service';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.css']
})
export class TasksTableComponent implements OnInit, OnDestroy {
  @Input() tasks: Task[];
  @Input() currentUser;

  @Output() edited = new EventEmitter<Task>();
  @Output() deleted = new EventEmitter<Task>();

  editableTask: Task;
  subscriptionTask: Subscription;

  constructor(private detailsService: DetailsService, private taskService: TaskService) {

  }

  ngOnInit() {
    this.subscriptionTask = this.detailsService.currentTask.subscribe(
      newTask => this.editableTask = newTask
    );
  }

  details(task: Task) {
    this.detailsService.changeTask(task);
  }

  ngOnDestroy() {
    this.subscriptionTask.unsubscribe();
  }
}


