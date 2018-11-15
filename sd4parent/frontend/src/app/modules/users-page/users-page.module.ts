import { NgModule } from '@angular/core';

import { UsersPageComponent } from './users-page.component';
import { UsersContentComponent } from './users-content/users-content.component';
import { UsersListComponent } from './users-content/users-list/users-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewUserModalComponent } from './users-content/new-user-modal/new-user-modal.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UsersPageComponent,
    UsersContentComponent,
    UsersListComponent,
    NewUserModalComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    UsersPageComponent,
    UsersContentComponent,
    UsersListComponent,
    NewUserModalComponent
  ],
  providers: [],
  entryComponents: [
    NewUserModalComponent
  ],
})
export class UsersPageModule {
}
