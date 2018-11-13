import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../shared/models/Project';

@Component({
  selector: 'app-projects-content',
  templateUrl: './projects-content.component.html',
  styleUrls: ['./projects-content.component.css']
})
export class ProjectsContentComponent {
  @Input() projects: Project[];
  @Input() currentUser;

  @Output() added = new EventEmitter();
  @Output() edited = new EventEmitter<Project>();
  @Output() deleted = new EventEmitter<Project>();

  add() {
    this.added.emit();
  }

  edit(project: Project) {
    this.edited.emit(project);
  }

  delete(project: Project) {
    this.deleted.emit(project);
  }
}
