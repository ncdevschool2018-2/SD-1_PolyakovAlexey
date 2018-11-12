import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../../shared/models/Project';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent {
  @Input() projects: Project[];
  @Input() currentUser;
  @Output() edited = new EventEmitter<Project>();
  @Output() deleted = new EventEmitter<string>();

  edit(project: Project) {
    this.edited.emit(project);
  }

  delete(id: string) {
    this.deleted.emit(id);
  }
}
