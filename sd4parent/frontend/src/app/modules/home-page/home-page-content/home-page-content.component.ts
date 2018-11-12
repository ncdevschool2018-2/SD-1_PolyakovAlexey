import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../../shared/models/Task";

@Component({
  selector: 'home-page-content',
  templateUrl: './home-page-content.component.html',
  styleUrls: ['./home-page-content.component.css']
})
export class HomePageContentComponent {
  @Input() tasks: Task[];
  @Input() currentUser;

  @Output() onAdded = new EventEmitter();
  @Output() onEdited = new EventEmitter<Task>();
  @Output() onDeleted = new EventEmitter<Task>();

  add() {
    this.onAdded.emit();
  }

  edit(task: Task) {
    this.onEdited.emit(task);
  }

  delete(task: Task) {
    this.onDeleted.emit(task);
  }
}
