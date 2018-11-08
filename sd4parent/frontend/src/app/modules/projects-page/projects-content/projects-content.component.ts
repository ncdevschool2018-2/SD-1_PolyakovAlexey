import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Project} from "../../shared/models/Project";
import {NewProjectModalComponent} from "./new-project-modal/new-project-modal.component";
import {ProjectsPageComponent} from "../projects-page.component";
import {Subscription} from "rxjs";
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'projects-content',
  templateUrl: './projects-content.component.html',
  styleUrls: ['./projects-content.component.css']
})
export class ProjectsContentComponent {
  @Input() projects: Project[];
  @Input() subscriptionProjects: Subscription[];
  @Input() projectsComponent: ProjectsPageComponent;

  @Output() onEdited = new EventEmitter<Project>();
  @Output() onDeleted = new EventEmitter<string>();

  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
  }

  openNewProjectModal() {
    const initialState = {
      subscriptionProjects: this.subscriptionProjects,
      projectsComponent: this.projectsComponent
    };
    this.bsModalRef = this.modalService.show(NewProjectModalComponent, {initialState});
  }

  edit(project: Project) {
    this.onEdited.emit(project);
  }

  delete(id: string) {
    this.onDeleted.emit(id);
  }
}
