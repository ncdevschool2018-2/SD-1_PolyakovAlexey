import {Component, OnInit} from '@angular/core';
import {Task} from "../../../model/Task";
import {Subscription} from "rxjs";
import {TaskService} from "../../../service/task.service";
import {UserRole} from "../../../model/enums/UserRole";
import {User} from "../../../model/User";

@Component({
  selector: 'tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.css']
})
export class TasksTableComponent implements OnInit {
  tasks: Task[];
  user: User = new User();
  task: Task = new Task();

  private subscriptions: Subscription[] = [];

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.loadTasks();
  }

  public editTask(): void {
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

    this.subscriptions.push(this.taskService.saveTask(this.task).subscribe(() => {
      this.updateTasks();
    }));
  }

  public addTask(): void {

  }

  public deleteTask(id: string): void {
    this.subscriptions.push(this.taskService.deleteTask(id).subscribe(() => {
      this.updateTasks();
    }));
  }

  public updateTasks(): void {
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
