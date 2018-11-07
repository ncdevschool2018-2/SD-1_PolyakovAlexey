import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Task} from "../model/task";

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  constructor(private http: HttpClient) {
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('/api/tsk');
  }

  saveTask(task: Task): Observable<Task> {
    return this.http.post<Task>('/api/tsk', task);
  }

  deleteTask(id: string): Observable<void> {
    return this.http.delete<void>('/api/tsk/' + id);
  }

}
