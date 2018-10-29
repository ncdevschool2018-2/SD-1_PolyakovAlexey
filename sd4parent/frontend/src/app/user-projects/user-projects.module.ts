import {NgModule} from '@angular/core';

import {UserProjectsComponent} from "./user-projects.component";
import {ProjectsListComponent} from "./user-projects-content/projects-list/projects-list.component";
import {ProjectsListItemComponent} from "./user-projects-content/projects-list/projects-list-item/projects-list-item.component";
import {UserProjectsContentComponent} from "./user-projects-content/user-projects-content.component";
import {HomePageModule} from "../home-page/home-page.module";
import {AccordionModule} from 'ngx-bootstrap/accordion';

@NgModule({
  declarations: [
    UserProjectsComponent,
    UserProjectsContentComponent,
    ProjectsListComponent,
    ProjectsListItemComponent
  ],
  imports: [
    HomePageModule,
    AccordionModule.forRoot()
  ],
  exports: [
    UserProjectsComponent,
    UserProjectsContentComponent,
    ProjectsListComponent,
    ProjectsListItemComponent
  ],
  providers: [],
})
export class UserProjectsModule {
}
