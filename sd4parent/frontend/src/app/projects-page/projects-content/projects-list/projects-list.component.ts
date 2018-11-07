import {Component, OnInit} from '@angular/core';
import {Project} from "../../../model/Project";
import {Subscription} from "rxjs";
import {ProjectService} from "../../../service/project.service";

@Component({
  selector: 'projects-list',
  templateUrl: './projects-list.component.html', // todo: show created date
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  projects: Project[];

  private subscriptions: Subscription[] = [];

  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
    this.loadProjects();
  }

  public deleteProject(id: string): void {
    this.subscriptions.push(this.projectService.deleteProject(id).subscribe(() => {
      this.updateProjects();
    }));
  }

  public updateProjects(): void {
    this.loadProjects();
  }

  private loadProjects(): void {
    this.subscriptions.push(this.projectService.getProjects().subscribe(projects => {
      this.projects = projects as Project[];
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
