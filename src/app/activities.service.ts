import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  baseUrl: string = 'http://localhost:8000/activities';
  activities: object[] = [];
  activities$ = new BehaviorSubject<object[]>([]);

  constructor(private http: HttpClient) { }

  getActivities(): void {
    let obs = this.http.get<object[]>(`${this.baseUrl}/1`);
    obs.subscribe((data) => {
      this.activities = data;
      this.activities$.next(this.activities);
    });
  }

  createActivity(locationId: number): void {
    let obs = this.http.post(`${this.baseUrl}/create/`, {
      location_id: locationId,
      user_id: 1
    });
    obs.subscribe((data) => {
      this.getActivities();
    });
  }
}
