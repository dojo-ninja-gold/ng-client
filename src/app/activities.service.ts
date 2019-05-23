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

  createActivity(locationId: number): void {
    let obs = this.http.post(`${this.baseUrl}/create/`, {
      location_id: locationId,
      user_id: 1
    });
    obs.subscribe((data) => {
      console.log(data);
    });
  }
}
