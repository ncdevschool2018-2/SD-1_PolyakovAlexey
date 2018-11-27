import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attachment } from '../models/Attachment';

@Injectable({
  providedIn: 'root'
})
export class AttachmentService {

  constructor(private http: HttpClient) {

  }

  save(attachment: Attachment): Observable<Attachment> {
    return this.http.post<Attachment>('/api/attachment', attachment);
  }

  findAll(): Observable<Attachment[]> {
    return this.http.get<Attachment[]>('/api/attachment');
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>('/api/attachment/' + id);
  }
}
