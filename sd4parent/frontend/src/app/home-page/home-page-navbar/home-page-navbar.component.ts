import {Component} from '@angular/core';

@Component({
  selector: 'home-page-navbar',
  templateUrl: './home-page-navbar.component.html',
})
export class HomePageNavbarComponent {
  private isModalVisible: boolean = false;

  public showModal() {
    this.isModalVisible = true;
  }

  public closeModal(isConfirmed: boolean) {
    this.isModalVisible = false;
  }
}
