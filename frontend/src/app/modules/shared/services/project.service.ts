import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) {

  }

  save(project: Project): Observable<Project> {
    return this.http.post<Project>('/api/project', project);
  }

  findAll(): Observable<Project[]> {
    return this.http.get<Project[]>('/api/project');
  }

  findById(id: number): Observable<Project> {
    return this.http.get<Project>('/api/project/' + id);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>('/api/project/' + id);
  }
}
