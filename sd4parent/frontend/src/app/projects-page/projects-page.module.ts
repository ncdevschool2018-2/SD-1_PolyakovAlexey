import {NgModule} from '@angular/core';

import {ProjectsPageComponent} from "./projects-page.component";
import {ProjectsListComponent} from "./projects-content/projects-list/projects-list.component";
import {HomePageModule} from "../home-page/home-page.module";
import {AccordionModule} from 'ngx-bootstrap/accordion';
import {ProjectsContentComponent} from "./projects-content/projects-content.component";

@NgModule({
  declarations: [
    ProjectsPageComponent,
    ProjectsContentComponent,
    ProjectsListComponent,
  ],
  imports: [
    HomePageModule,
    AccordionModule.forRoot()
  ],
  exports: [
    ProjectsPageComponent,
    ProjectsContentComponent,
    ProjectsListComponent,
  ],
  providers: [],
})
export class ProjectsPageModule {
}
