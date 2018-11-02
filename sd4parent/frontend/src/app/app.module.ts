import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';

import {HomePageModule} from "./home-page/home-page.module";
import {HomePageComponent} from "./home-page/home-page.component";

import {UserProfileModule} from "./user-profile/user-profile.module";
import {UserProfileComponent} from "./user-profile/user-profile.component";

import {WelcomePageModule} from "./welcome-page/welcome-page.module";
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";

import {TaskDetailsModule} from "./task-details/task-details.module";
import {TaskDetailsComponent} from "./task-details/task-details.component";

import {UserProjectsModule} from "./user-projects/user-projects.module";
import {UserProjectsComponent} from "./user-projects/user-projects.component";

const appRoutes: Routes = [
  {path: '', component: WelcomePageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'user-projects', component: UserProjectsComponent},
  {path: 'task-details', component: TaskDetailsComponent},
  {path: 'user-profile', component: UserProfileComponent},
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
    UserProjectsModule,
    TaskDetailsModule,
    UserProfileModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
