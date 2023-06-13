import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../interfaces/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class StringsProblemService {
  private url = 'http://localhost:8000/api/string-problem/';
  constructor(private http: HttpClient) { }

  calculateMaxValue(string: string): Observable<ApiResponse>{
    const body = {
      string
    }
    return this.http.post<ApiResponse>(this.url, body);
  }

}
