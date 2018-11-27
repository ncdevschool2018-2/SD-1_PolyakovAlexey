import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/User';

@Injectable()
export class LoginUserService {

  private userSource = new BehaviorSubject(new User());
  currentUser = this.userSource.asObservable();

  constructor() {
  }

  changeUser(user: User) {
    this.userSource.next(user);
  }
}
