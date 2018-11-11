import {Component, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";
import {Task} from "../../../shared/models/Task";
import {User} from "../../../shared/models/User";
import {TaskService} from "../../../shared/services/task.service";
import {Subscription} from "rxjs";
import {HomePageComponent} from "../../home-page.component";
import {Project} from "../../../shared/models/Project";
import {Priority} from "../../../shared/models/enums/Priority";

@Component({
  selector: 'new-task-modal',
  templateUrl: './new-task-modal.component.html',
})
export class NewTaskModalComponent implements OnInit {
  task: Task;
  editableTask: Task;
  tasks: Task[];
  subscriptionsOnTasks: Subscription[];

  users: User[];
  assignee: string;

  projects: Project[];
  projectCode: string;

  homePageComponent: HomePageComponent;
  editMode: boolean;

  priorities = Object.keys(Priority).filter(priority => typeof Priority[priority as any] === "number");

  constructor(private bsModalRef: BsModalRef, public taskService: TaskService) {
  }

  ngOnInit() {
    this.editableTask = this.task ? Task.cloneBase(this.task) : new Task();
    // this.assignee = this.editableTask.assignee.username;
    // this.projectCode = "NewProject";
  }

  public save(): void {
    // todo: get reporter through LocalStorage
    let user: User = new User();
    user.id = 2;
    user.username = "pm_1";
    user.password = "root";
    user.role = "PROJECT_MANAGER";
    user.current_project_id = 2;
    this.editableTask.reporter = user;

    this.editableTask.project = this.getProjectByCode(this.projectCode);
    this.editableTask.assignee = this.getUserByUsername(this.assignee);
    this.editableTask.code = this.getTicketCodeByProjectCode(this.projectCode);
    this.editableTask.priority = this.editableTask.priority.toUpperCase();

    this.task = Task.cloneBase(this.editableTask);
    this.subscriptionsOnTasks.push(this.taskService.saveTask(this.task).subscribe(() => {
      this.homePageComponent.updateTasks();
      this.closeModal();
    }));
  }

  private getUserByUsername(username: string): User {
    let user: User;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].username === username) {
        user = this.users[i];
      }
    }
    return user;
  }

  private getProjectByCode(code: string): Project {
    let project: Project;
    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i].code === code) {
        project = this.projects[i];
      }
    }
    console.log(project);
    return project;
  }

  private getTicketCodeByProjectCode(code: string): string {

    let numberOfTask: number = 1;
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].project.code === code) {
        numberOfTask++;
      }
    }
    return code + " - " + numberOfTask;
  }

  private closeModal() {
    this.bsModalRef.hide();
  }
}
