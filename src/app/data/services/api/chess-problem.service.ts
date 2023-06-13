import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../../interfaces/ApiResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChessProblemService {
  private url = 'http://localhost:8000/api/chess-problem/';

  constructor(private http: HttpClient) { }

  queensAttack(n: number, k: number, rq: number, cq: number, obstacles: number[][]): Observable<ApiResponse>{
    const body = {
      n,
      k,
      rq,
      cq,
      obstacles
    }
    return this.http.post<ApiResponse>(this.url, body);
  }
}
