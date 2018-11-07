import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Project} from "../../shared/models/Project";

@Component({
  selector: 'projects-content',
  templateUrl: './projects-content.component.html',
  styleUrls: ['./projects-content.component.css']
})
export class ProjectsContentComponent {
  @Input() projects: Project[];

  @Output() onEdited = new EventEmitter<Project>();
  @Output() onDeleted = new EventEmitter<string>();

  edit(project: Project) {
    this.onEdited.emit(project);
  }

  delete(id: string) {
    this.onDeleted.emit(id);
  }
}
