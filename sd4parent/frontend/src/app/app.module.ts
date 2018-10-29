import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeModule } from "./home/home.module";
import { HomeComponent } from "./home/home.component";

import { ProfileModule } from "./profile/profile.module";
import { ProfileComponent } from "./profile/profile.component";

import { IndexModule } from "./index/index.module";
import { IndexComponent } from "./index/index.component";

import { TaskModule } from "./task/task.module";
import { TaskComponent } from "./task/task.component";

import { ProjectsModule } from "./projects/projects.module";
import { ProjectsComponent } from "./projects/projects.component";

const appRoutes: Routes =[
  { path: '', component: IndexComponent},
  { path: 'home', component: HomeComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'task', component: TaskComponent},
  { path: 'profile', component: ProfileComponent},
  // { path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    IndexModule,
    HomeModule,
    ProjectsModule,
    TaskModule,
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
