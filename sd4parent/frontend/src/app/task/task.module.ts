import { NgModule } from '@angular/core';

import { TaskComponent } from "./task.component";
import { HomeNavbarModule } from "../home/home-navbar/home-navbar.module";
import { TaskContentModule } from "./task-content/task-content.module";

@NgModule({
  declarations: [
    TaskComponent
  ],
  imports: [
    HomeNavbarModule,
    TaskContentModule
  ],
  exports: [
    TaskComponent
  ],
  providers: [

  ],
})
export class TaskModule { }
