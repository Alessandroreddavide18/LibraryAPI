import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/books/';

  constructor(private http: HttpClient) { }

  getAuthors() {
    const url = 'http://127.0.0.1:8000/autori/';
    return this.http.get(url);
  }
  getLibri(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createBook(payload: any) {
    const url = 'http://127.0.0.1:8000/books/';
    return this.http.post(url, payload);
  }
}
