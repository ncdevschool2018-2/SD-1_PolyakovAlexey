import { Component, OnDestroy } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { User } from '../../shared/models/User';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { AuthService } from '../../shared/services/auth.service';
import { TokenStorageService } from '../../shared/services/token-storage.service';
import { LoginUserService } from '../../shared/services/login-user.service';

@Component({
  selector: 'app-authorization-modal',
  templateUrl: './authorization-modal.component.html',
  styleUrls: ['./authorization-modal.component.css']
})
export class AuthorizationModalComponent implements OnDestroy {

  loginUser: User = new User();

  constructor(public bsModalRef: BsModalRef, public router: Router,
              public userService: UserService, public authService: AuthService,
              public token: TokenStorageService, public loginUserService: LoginUserService) {
  }

  signIn(): void {
    this.authService.attemptAuth(this.loginUser.username, this.loginUser.password).subscribe(
      data => {
        this.token.saveToken(data.token);
        this.bsModalRef.hide();
      }
    );
  }

  ngOnDestroy() {
    this.userService.findByUsername(this.loginUser.username).subscribe(user => {
      this.loginUser = user;
      this.loginUserService.changeUser(this.loginUser);
      this.router.navigate(['/home']);
    });
  }
}
