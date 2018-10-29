import { NgModule } from '@angular/core';

import { ProjectsContentComponent } from "./projects-content.component";
import { ProjectsListModule } from "./projects-list/projects-list.module";

@NgModule({
  declarations: [
    ProjectsContentComponent,
  ],
  imports: [
    ProjectsListModule
  ],
  exports: [
    ProjectsContentComponent,
  ],
  providers: [

  ],
})
export class ProjectsContentModule { }
