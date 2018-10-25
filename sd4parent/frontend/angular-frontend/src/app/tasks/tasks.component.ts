import {Component, OnInit, TemplateRef} from '@angular/core';
import { Task } from "../model/task";
import { Subscription } from "rxjs";
import { TaskService } from "../service/task.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  public editMode = false;

  public tasks: Task[];
  public editableTasks: Task = new Task();
  public modalRef: BsModalRef;

  private subscriptions: Subscription[] = [];

  constructor(private taskService: TaskService, private modalService: BsModalService) {

  }

  ngOnInit() {
    this.loadTasks();
  }

  public _closeModal(): void {
    this.modalRef.hide();
  }

  public _openModal(template: TemplateRef<any>, task: Task): void {

    if (task) {
      this.editMode = true;
      this.editableTasks = Task.cloneBase(task);
    } else {
      this.refreshTasks();
      this.editMode = false;
    }

    this.modalRef = this.modalService.show(template);
  }

  public _addTask(): void {
    this.subscriptions.push(this.taskService.saveTask(this.editableTasks).subscribe(() => {
      this._updateTasks();
      this.refreshTasks();
      this._closeModal();
    }));
  }

  public _updateTasks(): void {
    this.loadTasks();
  }

  public _deleteTask(task_id: string): void {
    this.subscriptions.push(this.taskService.deleteTask(task_id).subscribe(() => {
      this._updateTasks();
    }));
  }

  private refreshTasks(): void {
    this.editableTasks = new Task();
  }

  private loadTasks(): void {
    // Get data from TaskService
    this.subscriptions.push(this.taskService.getTasks().subscribe(tasks => {
      // Parse json response into local array
      this.tasks = tasks as Task[];
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
