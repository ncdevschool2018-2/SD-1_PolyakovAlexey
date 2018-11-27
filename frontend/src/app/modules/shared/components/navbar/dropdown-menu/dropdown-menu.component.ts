import { Component } from '@angular/core';
import { TokenStorageService } from '../../../services/token-storage.service';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css']
})
export class DropdownMenuComponent {

  constructor(private token: TokenStorageService) {

  }

  signOut() {
    this.token.signOut();
  }
}
