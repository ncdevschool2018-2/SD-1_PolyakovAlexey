import {Component} from '@angular/core';

@Component({
  selector: 'dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css']
})
export class DropdownMenuComponent {
  signOut() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
