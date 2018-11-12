import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { HomePageModule } from './modules/home-page/home-page.module';
import { HomePageComponent } from './modules/home-page/home-page.component';

import { ProfilePageModule } from './modules/profile-page/profile-page.module';
import { ProfilePageComponent } from './modules/profile-page/profile-page.component';

import { WelcomePageModule } from './modules/welcome-page/welcome-page.module';
import { WelcomePageComponent } from './modules/welcome-page/welcome-page.component';

import { TaskDetailsPageModule } from './modules/task-details-page/task-details-page.module';
import { TaskDetailsPageComponent } from './modules/task-details-page/task-details-page.component';

import { ProjectsPageModule } from './modules/projects-page/projects-page.module';
import { ProjectsPageComponent } from './modules/projects-page/projects-page.component';

import { UsersPageModule } from './modules/users-page/users-page.module';
import { UsersPageComponent } from './modules/users-page/users-page.component';

const appRoutes: Routes = [
  {path: '', component: WelcomePageComponent},
  {path: 'home', component: HomePageComponent, data: {title: 'Home'}},
  {path: 'projects', component: ProjectsPageComponent, data: {title: 'Projects'}},
  {path: 'task-details', component: TaskDetailsPageComponent, data: {title: 'Task details'}},
  {path: 'profile', component: ProfilePageComponent, data: {title: 'Profile'}},
  {path: 'users', component: UsersPageComponent, data: {title: 'Users'}},
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
    UsersPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
