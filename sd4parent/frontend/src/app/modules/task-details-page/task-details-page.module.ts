import { NgModule } from '@angular/core';

import { TaskDetailsPageComponent } from './task-details-page.component';
import { HomePageModule } from '../home-page/home-page.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TaskDetailsPageComponent,
  ],
  imports: [
    HomePageModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    TaskDetailsPageComponent,
    HomePageModule
  ],
  providers: [],
})
export class TaskDetailsPageModule {
}
