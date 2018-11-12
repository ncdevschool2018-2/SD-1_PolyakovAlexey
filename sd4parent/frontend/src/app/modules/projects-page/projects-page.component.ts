import { Component, OnDestroy, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
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
  bsModalRef: BsModalRef;
  subscriptionProjects: Subscription[] = [];
  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  constructor(private modalService: BsModalService, private projectService: ProjectService) {
  }

  ngOnInit() {
    this.loadProjects();
  }

  edited(project: Project) {
    const initialState = {
      project: project,
      editMode: true,
      subscriptionProjects: this.subscriptionProjects,
      projectsComponent: this
    };
    this.bsModalRef = this.modalService.show(NewProjectModalComponent, {initialState});
  }

  public deleted(id: string): void {
    this.subscriptionProjects.push(this.projectService.deleteProject(id).subscribe(() => {
      this.updateProjects();
    }));
  }

  public updateProjects(): void {
    this.loadProjects();
  }

  ngOnDestroy(): void {
    this.subscriptionProjects.forEach(subscription => subscription.unsubscribe());
  }

  private loadProjects(): void {
    this.subscriptionProjects.push(this.projectService.getProjects().subscribe(projects => {
      this.projects = projects as Project[];
    }));
  }
}
