import { NgModule } from '@angular/core';

import { ProjectsComponent } from "./projects.component";
import { HomeNavbarModule } from "../home/home-navbar/home-navbar.module";
import { ProjectsContentModule } from "./projects-content/projects-content.module";

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    HomeNavbarModule,
    ProjectsContentModule
  ],
  exports: [
    ProjectsComponent
  ],
  providers: [

  ],
})
export class ProjectsModule { }
