import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringsProblemService {
  private url = 'http://localhost:8000/api/string-problem/';
  constructor(private http: HttpClient) { }

  calculateMaxValue(string: string){
    const body = {
      string
    }
    return this.http.post(this.url, body);
  }

}
