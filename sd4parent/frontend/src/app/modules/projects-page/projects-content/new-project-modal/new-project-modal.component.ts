import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Subscription } from 'rxjs';
import { Project } from '../../../shared/models/Project';
import { ProjectsPageComponent } from '../../projects-page.component';
import { ProjectService } from '../../../shared/services/project.service';
import { User } from '../../../shared/models/User';

@Component({
  selector: 'app-new-project-modal',
  templateUrl: './new-project-modal.component.html',
})
export class NewProjectModalComponent implements OnInit {
  project: Project;
  editableProject: Project;
  subscriptionsOnProjects: Subscription[];

  projectsPageComponent: ProjectsPageComponent;
  currentUser: User;
  editMode: boolean;

  constructor(public bsModalRef: BsModalRef, public projectService: ProjectService) {
  }

  ngOnInit() {
    if (this.project) {
      this.editableProject = Project.cloneBase(this.project);
    } else {
      this.editableProject = new Project();
    }
  }

  public save(): void {
    if (!this.editMode) {
      this.editableProject.owner = this.currentUser;
    }
    this.project = Project.cloneBase(this.editableProject);
    this.subscriptionsOnProjects.push(this.projectService.saveProject(this.project).subscribe(() => {
      this.projectsPageComponent.updateProjects();
      this.closeModal();
    }));
  }

  closeModal() {
    this.bsModalRef.hide();
  }
}
