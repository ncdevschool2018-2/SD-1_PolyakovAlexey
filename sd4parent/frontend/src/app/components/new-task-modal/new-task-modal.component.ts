import {Component} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";
import {Task} from "../../model/Task";
import {User} from "../../model/User";
import {TaskService} from "../../service/task.service";
import {UserRole} from "../../model/enums/UserRole";

@Component({
  selector: 'new-task-modal',
  templateUrl: './new-task-modal.component.html',
})
export class NewTaskModalComponent {

  editableTask: Task = new Task();
  user: User = new User();
  task: Task = new Task();

  constructor(public bsModalRef: BsModalRef, public taskService: TaskService) {
  }

  public addTask(): void {
    this.user.id = 2;
    this.user.username = "pm_1";
    this.user.password = "root";
    this.user.role = UserRole.PROJECT_MANAGER;
    this.user.current_project_id = 2;

    this.task.id = 12;
    this.task.code = "NewProject-1";
    this.task.reporter = this.user;
    this.task.assignee = this.user;
    this.task.status = "OPEN";
    this.task.priority = "BLOCKER";
    this.task.created = "2018-04-10";
    this.task.dueDate = "2018-04-10";
    this.task.updated = "2018-04-10";
    this.task.estimation = "2018-04-10";

    console.log(this.taskService.saveTask(this.task));
  }

  private closeModal() {
    this.bsModalRef.hide();
  }
}
