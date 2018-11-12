import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Project} from "../../../shared/models/Project";

@Component({
  selector: 'projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent {
  @Input() projects: Project[];
  @Input() currentUser;
  @Output() onEdited = new EventEmitter<Project>();
  @Output() onDeleted = new EventEmitter<string>();

  edit(project: Project) {
    this.onEdited.emit(project);
  }

  delete(id: string) {
    this.onDeleted.emit(id);
  }
}
