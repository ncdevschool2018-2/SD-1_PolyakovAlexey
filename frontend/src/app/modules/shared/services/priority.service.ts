import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Priority } from '../models/Priority';

@Injectable({
  providedIn: 'root'
})
export class PriorityService {

  constructor(private http: HttpClient) {

  }

  findAll(): Observable<Priority[]> {
    return this.http.get<Priority[]>('/api/priority');
  }
}
