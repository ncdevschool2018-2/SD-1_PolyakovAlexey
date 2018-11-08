import {Component} from '@angular/core';
import {Task} from "../shared/models/Task";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {Subscription} from "rxjs";
import {TaskService} from "../shared/services/task.service";
import {NewTaskModalComponent} from "./home-page-content/new-task-modal/new-task-modal.component";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  tasks: Task[];
  bsModalRef: BsModalRef;
  subscriptionTasks: Subscription[] = [];

  constructor(private modalService: BsModalService, private taskService: TaskService) {
  }

  ngOnInit() {
    this.loadTasks();
  }

  onEdited(task: Task) {
    const initialState = {
      task: task,
      editMode: true,
      subscriptionTasks: this.subscriptionTasks,
      tasksComponent: this
    };
    this.bsModalRef = this.modalService.show(NewTaskModalComponent, {initialState});
  }

  onDeleted(id: string): void {
    this.subscriptionTasks.push(this.taskService.deleteTask(id).subscribe(() => {
      this.updateTasks();
    }));
  }

  updateTasks(): void {
    this.loadTasks();
  }

  private loadTasks(): void {
    this.subscriptionTasks.push(this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks as Task[];
    }));
  }

  ngOnDestroy(): void {
    this.subscriptionTasks.forEach(subscription => subscription.unsubscribe());
  }
}
