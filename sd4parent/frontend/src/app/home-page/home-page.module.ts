import {NgModule} from '@angular/core';

import {HomePageComponent} from "./home-page.component";
import {NavbarComponent} from "../components/navbar/navbar.component";
import {DropdownMenuComponent} from "../components/dropdown-menu/dropdown-menu.component";
import {HomePageContentComponent} from "./home-page-content/home-page-content.component";
import {PaginationModule} from "ngx-bootstrap/pagination";
import {TasksTableComponent} from "./home-page-content/tasks-table/tasks-table.component";
import {FiltersComponent} from "./home-page-content/filters/filters.component";
import {TablePaginationComponent} from "./home-page-content/table-pagination/table-pagination.component";
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {NewTaskModalComponent} from "../components/new-task-modal/new-task-modal.component";
import {NewUserModalComponent} from "../components/new-user-modal/new-user-modal.component";
import {NewProjectModalComponent} from "../components/new-project-modal/new-project-modal.component";
import {ModalModule} from "ngx-bootstrap/modal";

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
    ModalModule.forRoot()
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
