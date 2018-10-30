import {NgModule} from '@angular/core';

import {HomePageComponent} from "./home-page.component";
import {HomePageNavbarComponent} from "./home-page-navbar/home-page-navbar.component";
import {DropdownMenuComponent} from "./home-page-navbar/dropdown-menu/dropdown-menu.component";
import {HomePageContentComponent} from "./home-page-content/home-page-content.component";
import {PaginationModule} from "ngx-bootstrap/pagination";
import {TasksTableComponent} from "./home-page-content/tasks-table/tasks-table.component";
import {TasksTableItemComponent} from "./home-page-content/tasks-table/tasks-table-item/tasks-table-item.component";
import {FiltersComponent} from "./home-page-content/filters/filters.component";
import {TablePaginationComponent} from "./home-page-content/table-pagination/table-pagination.component";
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {NewProjectModalComponent} from "../modals/new-project-modal/new-project-modal.component";

@NgModule({
  declarations: [
    HomePageComponent,
    DropdownMenuComponent,
    HomePageNavbarComponent,
    HomePageContentComponent,
    TasksTableComponent,
    TasksTableItemComponent,
    FiltersComponent,
    TablePaginationComponent,
    NewProjectModalComponent
  ],
  imports: [
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  exports: [
    HomePageComponent,
    DropdownMenuComponent,
    HomePageNavbarComponent,
    HomePageContentComponent,
    TasksTableComponent,
    TasksTableItemComponent,
    FiltersComponent,
    TablePaginationComponent,
    NewProjectModalComponent
  ],
  providers: [],
})
export class HomePageModule {
}
