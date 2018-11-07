import {Component} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {NewTaskModalComponent} from "../../components/new-task-modal/new-task-modal.component";

@Component({
  selector: 'home-page-content',
  templateUrl: './home-page-content.component.html',
  styleUrls: ['./home-page-content.component.css']
})
export class HomePageContentComponent {
  bsModalRef: BsModalRef;

  constructor(private _modalService: BsModalService) {
  }

  openNewTaskModal() {
    this.bsModalRef = this._modalService.show(NewTaskModalComponent);
  }
}
