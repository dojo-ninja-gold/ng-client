import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  baseUrl: string = 'http://localhost:8000/activities';

  constructor(private http: HttpClient) { }

  getActivities(): Observable<object[]> {
    return this.http.get<object[]>(`${this.baseUrl}/1`);
  }
}
