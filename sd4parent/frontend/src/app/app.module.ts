import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';

import {HomePageModule} from "./home-page/home-page.module";
import {HomePageComponent} from "./home-page/home-page.component";

import {ProfilePageModule} from "./profile-page/profile-page.module";
import {ProfilePageComponent} from "./profile-page/profile-page.component";

import {WelcomePageModule} from "./welcome-page/welcome-page.module";
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";

import {TaskDetailsPageModule} from "./task-details-page/task-details-page.module";
import {TaskDetailsPageComponent} from "./task-details-page/task-details-page.component";

import {ProjectsPageModule} from "./projects-page/projects-page.module";
import {ProjectsPageComponent} from "./projects-page/projects-page.component";

const appRoutes: Routes = [
  {path: '', component: WelcomePageComponent},
  {path: 'home', component: HomePageComponent, data: {title: 'Home'}},
  {path: 'projects', component: ProjectsPageComponent, data: {title: 'Projects'}},
  {path: 'task-details', component: TaskDetailsPageComponent, data: {title: 'Task details'}},
  {path: 'profile', component: ProfilePageComponent, data: {title: 'Profile'}},
  // { path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    WelcomePageModule,
    HomePageModule,
    ProjectsPageModule,
    TaskDetailsPageModule,
    ProfilePageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
