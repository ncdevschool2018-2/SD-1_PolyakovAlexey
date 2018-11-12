import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomePageComponent } from './modules/welcome-page/welcome-page.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { ProjectsPageComponent } from './modules/projects-page/projects-page.component';
import { TaskDetailsPageComponent } from './modules/task-details-page/task-details-page.component';
import { ProfilePageComponent } from './modules/profile-page/profile-page.component';
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
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
