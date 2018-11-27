import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task } from '../shared/models/Task';
import { BsModalService } from 'ngx-bootstrap';
import { Subscription } from 'rxjs';
import { TaskService } from '../shared/services/task.service';
import { NewTaskModalComponent } from './home-page-content/new-task-modal/new-task-modal.component';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/User';
import { Project } from '../shared/models/Project';
import { ProjectService } from '../shared/services/project.service';
import { DetailsService } from '../shared/services/details.service';
import { LoginUserService } from '../shared/services/login-user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit, OnDestroy {

  tasks: Task[];
  projects: Project[];
  users: User[];
  currentUser: User = new User();
  subscriptionsOnTasks: Subscription[] = [];
  subscriptionsOnProjects: Subscription[] = [];
  subscriptionsOnUsers: Subscription[] = [];
  subscriptionOnCurrentUser: Subscription = new Subscription();

  constructor(private modalService: BsModalService, private taskService: TaskService,
              private userService: UserService, private projectService: ProjectService,
              private detailsService: DetailsService, private loginUserService: LoginUserService) {
  }

  ngOnInit() {
    this.loadTasks();
    this.loadProjects();
    this.loadUsers();
    this.subscriptionOnCurrentUser = this.loginUserService.currentUser.subscribe(user => {
      this.currentUser = user as User;
    });
  }

  onAdded() {
    const initialState = {
      tasks: this.tasks,
      projects: this.projects,
      users: this.users,
      subscriptionsOnTasks: this.subscriptionsOnTasks,
      currentUser: this.currentUser,
      homePageComponent: this,
      editMode: false
    };
    this.modalService.show(NewTaskModalComponent, {initialState});
  }

  onDetailed(task: Task) {
    this.detailsService.changeTask(task);
    this.detailsService.changeSubscriptionsOnTasks(this.subscriptionsOnTasks);
  }

  onEdited(task: Task) {
    const initialState = {
      addedTask: task,
      tasks: this.tasks,
      projects: this.projects,
      users: this.users,
      subscriptionsOnTasks: this.subscriptionsOnTasks,
      homePageComponent: this,
      editMode: true,
    };
    this.modalService.show(NewTaskModalComponent, {initialState});
  }

  onDeleted(task: Task): void {
    this.subscriptionsOnTasks.push(this.taskService.deleteById(task.id).subscribe(() => {
      // this.changeTicketCodes(task); <!-- todo: change ticket code after delete-->
      this.updateTasks();
    }));
  }

  // private changeTicketCodes(task: Task) {
  //   for (let i = 0; i < this.tasks.length; i++) {
  //     if (this.tasks[i] !== task && this.tasks[i].project.code === task.project.code) {
  //       this.tasks[i].code = this.calculateTicketCode(task.project.code);
  //       this.subscriptionsOnTasks.push(this.taskService.saveTask(this.tasks[i]).subscribe(() => {
  //         this.updateTasks();
  //       }));
  //     }
  //   }
  // }
  //
  // private calculateTicketCode(code: string): string {
  //   let numberOfTasks = 0;
  //   for (let i = 0; i < this.tasks.length; i++) {
  //     if (this.tasks[i].project.code === code) {
  //       numberOfTasks++;
  //     }
  //   }
  //   return code + ' - ' + (numberOfTasks - 1);
  // }

  updateTasks(): void {
    this.loadTasks();
  }

  ngOnDestroy(): void {
    this.subscriptionsOnTasks.forEach(task => task.unsubscribe());
    this.subscriptionsOnUsers.forEach(user => user.unsubscribe());
    this.subscriptionsOnProjects.forEach(project => project.unsubscribe());
    this.subscriptionOnCurrentUser.unsubscribe();
  }

  private loadTasks(): void {
    this.subscriptionsOnTasks.push(this.taskService.findAll().subscribe(tasks => {
      this.tasks = tasks as Task[];
    }));
  }

  private loadProjects(): void {
    this.subscriptionsOnProjects.push(this.projectService.findAll().subscribe(projects => {
      this.projects = projects as Project[];
    }));
  }

  private loadUsers(): void {
    this.subscriptionsOnUsers.push(this.userService.findAll().subscribe(users => {
      this.users = users as User[];
    }));
  }
}
