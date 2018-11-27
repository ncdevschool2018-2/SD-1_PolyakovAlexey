import { Component, OnDestroy, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';
import { Subscription } from 'rxjs';
import { Project } from '../shared/models/Project';
import { ProjectService } from '../shared/services/project.service';
import { NewProjectModalComponent } from './projects-content/new-project-modal/new-project-modal.component';
import { User } from '../shared/models/User';
import { LoginUserService } from '../shared/services/login-user.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
})
export class ProjectsPageComponent implements OnInit, OnDestroy {

  projects: Project[];
  currentUser: User;
  subscriptionsOnProjects: Subscription[] = [];
  subscriptionOnCurrentUser: Subscription;

  constructor(private modalService: BsModalService, private projectService: ProjectService,
              private loginUserService: LoginUserService) {
  }

  ngOnInit() {
    this.loadProjects();
    this.subscriptionOnCurrentUser = this.loginUserService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  onAdded() {
    const initialState = {
      currentUser: this.currentUser,
      subscriptionsOnProjects: this.subscriptionsOnProjects,
      projectsPageComponent: this,
      editMode: false
    };
    this.modalService.show(NewProjectModalComponent, {initialState});
  }

  onEdited(project: Project) {
    const initialState = {
      addedProject: project,
      subscriptionsOnProjects: this.subscriptionsOnProjects,
      projectsPageComponent: this,
      editMode: true
    };
    this.modalService.show(NewProjectModalComponent, {initialState});
  }

  onDeleted(project: Project): void {
    this.subscriptionsOnProjects.push(this.projectService.deleteById(project.id).subscribe(() => {
      this.updateProjects();
    }));
  }

  updateProjects(): void {
    this.loadProjects();
  }

  ngOnDestroy(): void {
    this.subscriptionsOnProjects.forEach(project => project.unsubscribe());
    this.subscriptionOnCurrentUser.unsubscribe();
  }

  private loadProjects(): void {
    this.subscriptionsOnProjects.push(this.projectService.findAll().subscribe(projects => {
      this.projects = projects as Project[];
    }));
  }
}
