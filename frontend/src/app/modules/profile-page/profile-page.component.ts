import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../shared/models/User';
import { Subscription } from 'rxjs';
import { LoginUserService } from '../shared/services/login-user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit, OnDestroy {

  currentUser: User;
  subscriptionOnCurrentUser: Subscription;

  constructor(private loginUserService: LoginUserService) {

  }

  ngOnInit() {
    this.subscriptionOnCurrentUser = this.loginUserService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnDestroy(): void {
    this.subscriptionOnCurrentUser.unsubscribe();
  }
}
