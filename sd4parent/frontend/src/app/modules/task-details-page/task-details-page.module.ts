import { NgModule } from '@angular/core';

import { TaskDetailsPageComponent } from './task-details-page.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SetAssigneeModalComponent } from './set-assignee-modal/set-assignee-modal.component';

@NgModule({
  declarations: [
    TaskDetailsPageComponent,
    SetAssigneeModalComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    TaskDetailsPageComponent,
    SetAssigneeModalComponent
  ],
  providers: [],
  entryComponents: [
    SetAssigneeModalComponent
  ]
})
export class TaskDetailsPageModule {
}
