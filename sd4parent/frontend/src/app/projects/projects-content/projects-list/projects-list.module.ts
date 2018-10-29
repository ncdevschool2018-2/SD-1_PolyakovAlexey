import { NgModule } from '@angular/core';

import { ProjectsListComponent } from "./projects-list.component";
import { AccordionModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    ProjectsListComponent
  ],
  imports: [
    AccordionModule.forRoot()
  ],
  exports: [
    ProjectsListComponent,
  ],
  providers: [

  ],
})
export class ProjectsListModule { }
