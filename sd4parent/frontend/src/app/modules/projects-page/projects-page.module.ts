import {NgModule} from '@angular/core';

import {ProjectsPageComponent} from './projects-page.component';
import {ProjectsListComponent} from './projects-content/projects-list/projects-list.component';
import {AccordionModule} from 'ngx-bootstrap/accordion';
import {ProjectsContentComponent} from './projects-content/projects-content.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NewProjectModalComponent} from './projects-content/new-project-modal/new-project-modal.component';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    ProjectsPageComponent,
    ProjectsContentComponent,
    ProjectsListComponent,
    NewProjectModalComponent
  ],
  imports: [
    SharedModule,
    AccordionModule.forRoot(),
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    ProjectsPageComponent,
    ProjectsContentComponent,
    ProjectsListComponent,
    NewProjectModalComponent
  ],
  providers: [],
  entryComponents: [
    NewProjectModalComponent
  ],
})
export class ProjectsPageModule {
}
