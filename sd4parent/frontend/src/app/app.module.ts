import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageModule } from './modules/home-page/home-page.module';
import { ProfilePageModule } from './modules/profile-page/profile-page.module';
import { WelcomePageModule } from './modules/welcome-page/welcome-page.module';
import { TaskDetailsPageModule } from './modules/task-details-page/task-details-page.module';
import { ProjectsPageModule } from './modules/projects-page/projects-page.module';
import { UsersPageModule } from './modules/users-page/users-page.module';
import { SharedModule } from './modules/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WelcomePageModule,
    HomePageModule,
    ProjectsPageModule,
    TaskDetailsPageModule,
    ProfilePageModule,
    UsersPageModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
