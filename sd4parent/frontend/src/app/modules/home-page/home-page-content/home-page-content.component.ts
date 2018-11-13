import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from '../../shared/models/Task';

@Component({
  selector: 'app-home-page-content',
  templateUrl: './home-page-content.component.html',
  styleUrls: ['./home-page-content.component.css']
})
export class HomePageContentComponent {
  @Input() tasks: Task[];
  @Input() currentUser;

  @Output() added = new EventEmitter();
  @Output() edited = new EventEmitter<Task>();
  @Output() deleted = new EventEmitter<Task>();
}
