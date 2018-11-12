import {Component} from '@angular/core';
import {Task} from "../shared/models/Task";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {Subscription} from "rxjs";
import {TaskService} from "../shared/services/task.service";
import {NewTaskModalComponent} from "./home-page-content/new-task-modal/new-task-modal.component";
import {UserService} from "../shared/services/user.service";
import {User} from "../shared/models/User";
import {Project} from "../shared/models/Project";
import {ProjectService} from "../shared/services/project.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  tasks: Task[];
  projects: Project[];
  users: User[];

  subscriptionsOnTasks: Subscription[] = [];
  subscriptionsOnUsers: Subscription[] = [];
  subscriptionsOnProjects: Subscription[] = [];

  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService, private taskService: TaskService, private userService: UserService, private projectService: ProjectService) {
  }

  ngOnInit() {
    this.loadTasks();
    this.loadProjects();
    this.loadUsers();
  }

  onAdded() {
    const initialState = {
      subscriptionsOnTasks: this.subscriptionsOnTasks,
      tasks: this.tasks,
      projects: this.projects,
      users: this.users,
      homePageComponent: this,
      editMode: false
    };
    this.bsModalRef = this.modalService.show(NewTaskModalComponent, {initialState});
  }

  onEdited(task: Task) {
    const initialState = {
      task: task,
      tasks: this.tasks,
      subscriptionsOnTasks: this.subscriptionsOnTasks,
      projects: this.projects,
      users: this.users,
      homePageComponent: this,
      editMode: true,
    };
    this.bsModalRef = this.modalService.show(NewTaskModalComponent, {initialState});
  }

  onDeleted(task: Task): void {
    this.subscriptionsOnTasks.push(this.taskService.deleteTask(task.id).subscribe(() => {
      this.updateTasks();
      // this.changeTicketCodes(task);
    }));
  }

  changeTicketCodes(task: Task) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i] !== task && this.tasks[i].project.code === task.project.code) {
        this.tasks[i].code = this.getNewTicketCode(task.project.code);
        this.subscriptionsOnTasks.push(this.taskService.saveTask(this.tasks[i]).subscribe(() => {
          this.updateTasks();
        }));
      }
    }
  }

  updateTasks(): void {
    this.loadTasks();
  }

  ngOnDestroy(): void {
    this.subscriptionsOnTasks.forEach(subscription => subscription.unsubscribe());
  }

  private getNewTicketCode(code: string): string {
    let numberOfTasks: number = 0;
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].project.code === code) {
        numberOfTasks++;
      }
    }
    return code + " - " + (numberOfTasks - 1);
  }

  private getTaskById(id: number): Task {
    let task: Task;
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id === id) {
        task = this.tasks[i];
      }
    }
    return task;
  }

  private loadTasks(): void {
    this.subscriptionsOnTasks.push(this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks as Task[];
    }));
  }

  private loadProjects(): void {
    this.subscriptionsOnProjects.push(this.projectService.getProjects().subscribe(projects => {
      this.projects = projects as Project[];
    }));
  }

  private loadUsers(): void {
    this.subscriptionsOnUsers.push(this.userService.getUsers().subscribe(users => {
      this.users = users as User[];
    }));
  }
}
