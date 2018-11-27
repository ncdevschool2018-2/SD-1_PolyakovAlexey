import { NgModule } from '@angular/core';

import { TaskDetailsPageComponent } from './task-details-page.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TaskDetailsPageComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    TaskDetailsPageComponent,
  ]
})
export class TaskDetailsPageModule {
}
