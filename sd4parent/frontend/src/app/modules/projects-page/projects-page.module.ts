import { NgModule } from '@angular/core';

import { ProjectsPageComponent } from './projects-page.component';
import { ProjectsListComponent } from './projects-content/projects-list/projects-list.component';
import { HomePageModule } from '../home-page/home-page.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ProjectsContentComponent } from './projects-content/projects-content.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NewProjectModalComponent } from './projects-content/new-project-modal/new-project-modal.component';

@NgModule({
  declarations: [
    ProjectsPageComponent,
    ProjectsContentComponent,
    ProjectsListComponent,
    NewProjectModalComponent
  ],
  imports: [
    HomePageModule,
    AccordionModule.forRoot(),
    CommonModule,
    HttpClientModule,
    FormsModule
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
