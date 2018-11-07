import {Component} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {Subscription} from "rxjs";
import {Project} from "../shared/models/Project";
import {ProjectService} from "../shared/services/project.service";
import {NewProjectModalComponent} from "../shared/components/new-project-modal/new-project-modal.component";

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
})
export class ProjectsPageComponent {
  projects: Project[];
  bsModalRef: BsModalRef;
  subscriptionProjects: Subscription[] = [];

  constructor(private modalService: BsModalService, private projectService: ProjectService) {
  }

  ngOnInit() {
    this.loadProjects();
  }

  onEdited(project: Project) {
    const initialState = {
      project: project,
      editMode: true,
      subscriptionProjects: this.subscriptionProjects,
      projectsComponent: this
    };
    this.bsModalRef = this.modalService.show(NewProjectModalComponent, {initialState});
  }

  public onDeleted(id: string): void {
    this.subscriptionProjects.push(this.projectService.deleteProject(id).subscribe(() => {
      this.updateProjects();
    }));
  }

  public updateProjects(): void {
    this.loadProjects();
  }

  private loadProjects(): void {
    this.subscriptionProjects.push(this.projectService.getProjects().subscribe(projects => {
      this.projects = projects as Project[];
    }));
  }

  ngOnDestroy(): void {
    this.subscriptionProjects.forEach(subscription => subscription.unsubscribe());
  }
}
