import { NgModule } from '@angular/core';

import {HomeContentComponent} from "./home-content.component";
import {TasksTableComponent} from "./tasks-table/tasks-table.component";
import {TablePaginationComponent} from "./table-pagination/table-pagination.component";
import {TableFiltersComponent} from "./table-filters/table-filters.component";
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [
    HomeContentComponent,
    TasksTableComponent,
    TablePaginationComponent,
    TableFiltersComponent
  ],
  imports: [
    PaginationModule.forRoot()
  ],
  exports: [
    HomeContentComponent,
    TasksTableComponent,
    TablePaginationComponent,
    TableFiltersComponent
  ],
  providers: [

  ],
})
export class HomeContentModule { }
