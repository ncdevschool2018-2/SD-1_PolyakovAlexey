import {NgModule} from '@angular/core';

import {HomePageComponent} from "./home-page.component";
import {NavbarComponent} from "../shared/components/navbar/navbar.component";
import {DropdownMenuComponent} from "../shared/components/navbar/dropdown-menu/dropdown-menu.component";
import {HomePageContentComponent} from "./home-page-content/home-page-content.component";
import {PaginationModule} from "ngx-bootstrap/pagination";
import {TasksTableComponent} from "./home-page-content/tasks-table/tasks-table.component";
import {FiltersComponent} from "./home-page-content/filters/filters.component";
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {NewTaskModalComponent} from "./home-page-content/new-task-modal/new-task-modal.component";
import {ModalModule} from "ngx-bootstrap/modal";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from '@angular/forms';
import {DataTableModule} from "angular-6-datatable";
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    HomePageComponent,
    DropdownMenuComponent,
    NavbarComponent,
    HomePageContentComponent,
    TasksTableComponent,
    FiltersComponent,
    NewTaskModalComponent
  ],
  imports: [
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CommonModule,
    HttpClientModule,
    FormsModule,
    DataTableModule
  ],
  exports: [
    HomePageComponent,
    DropdownMenuComponent,
    NavbarComponent,
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
