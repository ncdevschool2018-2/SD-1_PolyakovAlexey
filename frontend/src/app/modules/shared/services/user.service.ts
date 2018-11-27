import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  save(user: User): Observable<User> {
    return this.http.post<User>('/api/user', user);
  }

  findAll(): Observable<User[]> {
    return this.http.get<User[]>('/api/user');
  }

  findById(id: number): Observable<User> {
    return this.http.get<User>('/api/user/' + id);
  }

  findByUsername(username: string): Observable<User> {
    return this.http.get<User>('/api/user/login/' + username);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>('/api/user/' + id);
  }
}
