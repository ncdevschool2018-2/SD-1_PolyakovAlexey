import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Status } from '../models/Status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http: HttpClient) {

  }

  findByName(name: string): Observable<Status> {
    return this.http.get<Status>('/api/status/' + name);
  }
}
