import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/usr');
  }

  saveUser(user: User): Observable<User> {
    return this.http.post<User>('/api/usr', user);
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>('/api/usr/' + id);
  }

}
