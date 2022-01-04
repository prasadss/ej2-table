import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ColumnService {
  constructor(private http: HttpClient) {}

  getColumns() {
    return this.http.get('/api/column');
  }
}
