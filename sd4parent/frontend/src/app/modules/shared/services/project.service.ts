import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  constructor(private http: HttpClient) {
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('/api/prj');
  }

  saveProject(project: Project): Observable<Project> {
    return this.http.post<Project>('/api/prj', project);
  }

  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>('/api/prj/' + id);
  }

}
