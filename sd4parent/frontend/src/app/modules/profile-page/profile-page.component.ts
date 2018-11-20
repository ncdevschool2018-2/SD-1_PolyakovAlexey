import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {
  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  // private getProjectCodeById(id: number) {
  //   let code = '';
  //   for (let i = 0; i < this.projects.length; i++) {
  //     if (this.projects[i].id === id) {
  //       code = this.projects[i].code;
  //     }
  //   }
  //   return code;
  // }
}
