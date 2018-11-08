import {Component} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {NewTaskModalComponent} from "./new-task-modal/new-task-modal.component";
import {Task} from "../../shared/models/Task";
import {Subscription} from "rxjs";
import {TaskService} from "../../shared/services/task.service";

@Component({
  selector: 'home-page-content',
  templateUrl: './home-page-content.component.html',
  styleUrls: ['./home-page-content.component.css']
})
export class HomePageContentComponent {
  tasks: Task[];
  bsModalRef: BsModalRef;
  subscriptions: Subscription[] = [];

  constructor(private modalService: BsModalService, private taskService: TaskService) {
  }

  ngOnInit() {
    this.loadTasks();
  }

  onAdd() {
    const initialState = {
      editMode: false,
      subscriptions: this.subscriptions,
      tableContent: this
    };
    this.bsModalRef = this.modalService.show(NewTaskModalComponent, {initialState});
  }

  onEdited(task: Task) {
    const initialState = {
      task: task,
      editMode: true,
      subscriptions: this.subscriptions,
      tableContent: this
    };
    this.bsModalRef = this.modalService.show(NewTaskModalComponent, {initialState});
  }

  onDeleted(id: string): void {
    this.subscriptions.push(this.taskService.deleteTask(id).subscribe(() => {
      this.updateTasks();
    }));
  }

  updateTasks(): void {
    this.loadTasks();
  }

  private loadTasks(): void {
    this.subscriptions.push(this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks as Task[];
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
