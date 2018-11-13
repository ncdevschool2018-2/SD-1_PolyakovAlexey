import { Component, OnDestroy, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';
import { Subscription } from 'rxjs';
import { Project } from '../shared/models/Project';
import { ProjectService } from '../shared/services/project.service';
import { NewProjectModalComponent } from './projects-content/new-project-modal/new-project-modal.component';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
})
export class ProjectsPageComponent implements OnInit, OnDestroy {
  projects: Project[];
  subscriptionsOnProjects: Subscription[] = [];
  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  constructor(private modalService: BsModalService, private projectService: ProjectService) {
  }

  ngOnInit() {
    this.loadProjects();
  }

  added() {
    const initialState = {
      currentUser: this.currentUser,
      subscriptionsOnProjects: this.subscriptionsOnProjects,
      projectsPageComponent: this,
      editMode: false
    };
    this.modalService.show(NewProjectModalComponent, {initialState});
  }

  edited(project: Project) {
    const initialState = {
      project: project,
      subscriptionsOnProjects: this.subscriptionsOnProjects,
      projectsPageComponent: this,
      editMode: true
    };
    this.modalService.show(NewProjectModalComponent, {initialState});
  }

  public deleted(project: Project): void {
    this.subscriptionsOnProjects.push(this.projectService.deleteProject(project.id).subscribe(() => {
      this.updateProjects();
    }));
  }

  public updateProjects(): void {
    this.loadProjects();
  }

  ngOnDestroy(): void {
    this.subscriptionsOnProjects.forEach(subscription => subscription.unsubscribe());
  }

  private loadProjects(): void {
    this.subscriptionsOnProjects.push(this.projectService.getProjects().subscribe(projects => {
      this.projects = projects as Project[];
    }));
  }
}
