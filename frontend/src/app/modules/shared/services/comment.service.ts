import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {

  }

  save(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>('/api/comment', comment);
  }

  findAll(): Observable<Comment[]> {
    return this.http.get<Comment[]>('/api/comment');
  }

  findById(id: number): Observable<Comment> {
    return this.http.get<Comment>('/api/comment/' + id);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>('/api/comment/' + id);
  }
}
