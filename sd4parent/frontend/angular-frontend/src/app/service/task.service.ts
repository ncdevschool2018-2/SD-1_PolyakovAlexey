import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Task} from "../model/task";

@Injectable({
  providedIn: 'root'
})
// Data service
export class TaskService { //todo create interface

  constructor(private http: HttpClient) {
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('/api/task');
  }

  saveTask(task: Task): Observable<Task> {
    return this.http.post<Task>('/api/task', task);
  }

  deleteTask(task_id: string): Observable<void> {
    return this.http.delete<void>('/api/task/' + task_id);
  }

}
