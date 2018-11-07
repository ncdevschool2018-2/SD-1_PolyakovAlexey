import {Component} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";
import {Subscription} from "rxjs";
import {Project} from "../../models/Project";
import {ProjectsPageComponent} from "../../../projects-page/projects-page.component";
import {ProjectService} from "../../services/project.service";

@Component({
  selector: 'new-project-modal',
  templateUrl: './new-project-modal.component.html',
})
export class NewProjectModalComponent {
  editableProject: Project;
  project: Project;
  subscriptionProjects: Subscription[];
  projectsComponent: ProjectsPageComponent;
  editMode: boolean;

  constructor(public bsModalRef: BsModalRef, public projectService: ProjectService) {
  }

  ngOnInit() {
    if (this.project) {
      this.editableProject = Project.cloneBase(this.project);
    }
    else {
      this.editableProject = new Project();
    }
  }

  public save(): void {
    this.project = Project.cloneBase(this.editableProject);
    this.subscriptionProjects.push(this.projectService.saveProject(this.project).subscribe(() => {
      this.projectsComponent.updateProjects();
      this.closeModal();
    }));
  }

  closeModal() {
    this.bsModalRef.hide();
  }
}
