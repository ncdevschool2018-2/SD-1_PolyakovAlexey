import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomePageComponent } from './modules/welcome-page/welcome-page.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { ProjectsPageComponent } from './modules/projects-page/projects-page.component';
import { TaskDetailsPageComponent } from './modules/task-details-page/task-details-page.component';
import { ProfilePageComponent } from './modules/profile-page/profile-page.component';
import { UsersPageComponent } from './modules/users-page/users-page.component';
import { AuthGuardService } from './modules/shared/services/auth-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomePageComponent
  },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'projects',
    component: ProjectsPageComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'task-details',
    component: TaskDetailsPageComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'users',
    component: UsersPageComponent,
    canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuardService
  ]
})

export class AppRoutingModule {

}
