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

  addedProject: Project;
  editableProject: Project;
  currentUser: User;
  subscriptionsOnProjects: Subscription[];
  projectsPageComponent: ProjectsPageComponent;
  editMode: boolean;

  constructor(public bsModalRef: BsModalRef, public projectService: ProjectService) {
  }

  ngOnInit() {
    if (this.addedProject) {
      this.editableProject = Project.clone(this.addedProject);
    } else {
      this.editableProject = new Project();
    }
  }

  // todo: add updated field to UI
  public save(): void {
    if (!this.editMode) {
      this.editableProject.owner = this.currentUser;
    }
    this.editableProject.updated = new Date(Date.now());
    this.addedProject = Project.clone(this.editableProject);
    this.subscriptionsOnProjects.push(this.projectService.save(this.addedProject).subscribe(() => {
      this.projectsPageComponent.updateProjects();
      this.bsModalRef.hide();
    }));
  }
}
