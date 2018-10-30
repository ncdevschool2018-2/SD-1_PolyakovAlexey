import {NgModule} from '@angular/core';

import {TaskDetailsComponent} from "./task-details.component";
import {HomePageModule} from "../home-page/home-page.module";

@NgModule({
  declarations: [
    TaskDetailsComponent,
  ],
  imports: [
    HomePageModule,
  ],
  exports: [
    TaskDetailsComponent
  ],
  providers: [],
})
export class TaskDetailsModule {
}
