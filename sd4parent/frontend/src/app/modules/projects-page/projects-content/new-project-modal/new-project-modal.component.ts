import {Component, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";
import {Subscription} from "rxjs";
import {Project} from "../../../shared/models/Project";
import {ProjectsPageComponent} from "../../projects-page.component";
import {ProjectService} from "../../../shared/services/project.service";
import {User} from "../../../shared/models/User";

@Component({
  selector: 'new-project-modal',
  templateUrl: './new-project-modal.component.html',
})
export class NewProjectModalComponent implements OnInit {
  editableProject: Project;
  project: Project;
  editMode: boolean;
  subscriptionProjects: Subscription[];
  projectsComponent: ProjectsPageComponent;

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
    // todo: add finding user object by name
    // Временный пользователь
    if (!this.editMode) {
      let user: User = new User();

      user.id = 2;
      user.username = "pm_1";
      user.password = "root";
      user.role = "PROJECT_MANAGER";
      user.current_project_id = 2;

      this.editableProject.owner = user;
    }
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
