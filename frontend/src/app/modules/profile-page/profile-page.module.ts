import { NgModule } from '@angular/core';

import { ProfilePageComponent } from './profile-page.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProfilePageComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    ProfilePageComponent,
  ]
})
export class ProfilePageModule {
}
