import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {

  }

  save(task: Task): Observable<Task> {
    return this.http.post<Task>('/api/task', task);
  }

  findAll(): Observable<Task[]> {
    return this.http.get<Task[]>('/api/task');
  }

  findById(id: number): Observable<Task> {
    return this.http.get<Task>('/api/task/' + id);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>('/api/task/' + id);
  }
}
