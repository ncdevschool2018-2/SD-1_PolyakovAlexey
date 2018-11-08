import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {NewTaskModalComponent} from "./new-task-modal/new-task-modal.component";
import {Task} from "../../shared/models/Task";
import {Subscription} from "rxjs";
import {HomePageComponent} from "../home-page.component";

@Component({
  selector: 'home-page-content',
  templateUrl: './home-page-content.component.html',
  styleUrls: ['./home-page-content.component.css']
})
export class HomePageContentComponent {
  @Input() tasks: Task[];
  @Input() subscriptionTasks: Subscription[];
  @Input() tasksComponent: HomePageComponent;

  @Output() onEdited = new EventEmitter<Task>();
  @Output() onDeleted = new EventEmitter<string>();

  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
  }

  openNewUserModal() {
    const initialState = {
      subscriptionTasks: this.subscriptionTasks,
      tasksComponent: this.tasksComponent
    };
    this.bsModalRef = this.modalService.show(NewTaskModalComponent, {initialState});
  }

  edit(task: Task) {
    this.onEdited.emit(task);
  }

  delete(id: string) {
    this.onDeleted.emit(id);
  }
}
