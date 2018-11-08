import {NgModule} from '@angular/core';

import {HomePageComponent} from "./home-page.component";
import {NavbarComponent} from "../shared/components/navbar/navbar.component";
import {DropdownMenuComponent} from "../shared/components/navbar/dropdown-menu/dropdown-menu.component";
import {HomePageContentComponent} from "./home-page-content/home-page-content.component";
import {PaginationModule} from "ngx-bootstrap/pagination";
import {TasksTableComponent} from "./home-page-content/tasks-table/tasks-table.component";
import {FiltersComponent} from "./home-page-content/filters/filters.component";
import {TablePaginationComponent} from "./home-page-content/table-pagination/table-pagination.component";
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {NewTaskModalComponent} from "./home-page-content/new-task-modal/new-task-modal.component";
import {NewUserModalComponent} from "../users-page/users-content/new-user-modal/new-user-modal.component";
import {NewProjectModalComponent} from "../projects-page/projects-content/new-project-modal/new-project-modal.component";
import {ModalModule} from "ngx-bootstrap/modal";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HomePageComponent,
    DropdownMenuComponent,
    NavbarComponent,
    HomePageContentComponent,
    TasksTableComponent,
    FiltersComponent,
    TablePaginationComponent,
    NewProjectModalComponent,
    NewUserModalComponent,
    NewTaskModalComponent,
  ],
  imports: [
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    HomePageComponent,
    DropdownMenuComponent,
    NavbarComponent,
    HomePageContentComponent,
    TasksTableComponent,
    FiltersComponent,
    TablePaginationComponent,
    NewProjectModalComponent,
    NewUserModalComponent,
    NewTaskModalComponent,
  ],
  providers: [],
  entryComponents: [
    NewProjectModalComponent,
    NewUserModalComponent,
    NewTaskModalComponent
  ]
})
export class HomePageModule {
}
