import { NgModule } from '@angular/core';

import { HomePageComponent } from './home-page.component';
import { HomePageContentComponent } from './home-page-content/home-page-content.component';
import { TasksTableComponent } from './home-page-content/tasks-table/tasks-table.component';
import { FiltersComponent } from './home-page-content/filters/filters.component';
import { NewTaskModalComponent } from './home-page-content/new-task-modal/new-task-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-6-datatable';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomePageComponent,
    HomePageContentComponent,
    TasksTableComponent,
    FiltersComponent,
    NewTaskModalComponent
  ],
  imports: [
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    SharedModule,
    CommonModule,
    FormsModule,
    DataTableModule,
    HttpClientModule
  ],
  exports: [
    HomePageComponent,
    HomePageContentComponent,
    TasksTableComponent,
    FiltersComponent,
    NewTaskModalComponent
  ],
  providers: [],
  entryComponents: [
    NewTaskModalComponent
  ]
})
export class HomePageModule {
}
