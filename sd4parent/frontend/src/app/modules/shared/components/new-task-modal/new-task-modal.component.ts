import {Component, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";
import {Task} from "../../models/Task";
import {User} from "../../models/User";
import {TaskService} from "../../services/task.service";
import {Subscription} from "rxjs";
import {HomePageContentComponent} from "../../../home-page/home-page-content/home-page-content.component";
import {Priority} from "../../models/enums/Priority";

@Component({
  selector: 'new-task-modal',
  templateUrl: './new-task-modal.component.html',
})
export class NewTaskModalComponent implements OnInit {
  editableTask: Task;
  task: Task;

  editMode: boolean;
  subscriptions: Subscription[];
  tableContent: HomePageContentComponent;

  priorities = Priority;

  constructor(public bsModalRef: BsModalRef, public taskService: TaskService) {
  }

  ngOnInit() {
    if (this.task) {
      this.editableTask = Task.cloneBase(this.task);
    }
    else {
      this.editableTask = new Task();
    }
  }

  public save(): void {
    // todo: add finding user object by name
    // Временный пользователь
    let user: User = new User();

    user.id = 2;
    user.username = "pm_1";
    user.password = "root";
    user.role = "PROJECT_MANAGER";
    user.current_project_id = 2;

    this.editableTask.assignee = user;
    this.editableTask.reporter = user;

    this.task = Task.cloneBase(this.editableTask);
    // todo: add Priority pipe
    this.task.priority = this.task.priority.toUpperCase();
    this.subscriptions.push(this.taskService.saveTask(this.task).subscribe(() => {
      this.tableContent.updateTasks();
      this.closeModal();
    }));
  }

  private closeModal() {
    this.bsModalRef.hide();
  }
}


//
// this.task.id = 12;
// this.task.code = "NewProject-1";
// this.task.reporter = this.user;
// this.task.assignee = this.user;
// this.task.status = "OPEN";
// this.task.priority = "BLOCKER";
// this.task.created = "2018-04-10";
// this.task.dueDate = "2018-04-10";
// this.task.updated = "2018-04-10";
// this.task.estimation = "2018-04-10";
