import {NgModule} from '@angular/core';

import {TaskDetailsPageComponent} from "./task-details-page.component";
import {HomePageModule} from "../home-page/home-page.module";

@NgModule({
  declarations: [
    TaskDetailsPageComponent,
  ],
  imports: [
    HomePageModule,
  ],
  exports: [
    TaskDetailsPageComponent
  ],
  providers: [],
})
export class TaskDetailsPageModule {
}
