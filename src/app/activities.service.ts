import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, forkJoin } from 'rxjs';
import { LocationsService } from './locations.service';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  baseUrl: string = 'http://localhost:8000/activities';
  activities: any[] = [];
  activities$ = new BehaviorSubject<any[]>([]);

  constructor(
    private http: HttpClient,
    private locationService: LocationsService
  ) { }

  getActivities(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/1`);
  }

  getFullActivities(): void {
    forkJoin(
      this.getActivities(),
      this.locationService.getLocations()
    ).subscribe(([activities, locations]) => {
      for(let activity of activities) {
        for(let location of locations) {
          if(activity.fields.location === location.pk) {
            activity.fields.location = location.fields.name;
            break;
          }
        }
      }
      this.activities = activities;
      this.activities$.next(this.activities);
    })
  }

  createActivity(locationId: number): void {
    let obs = this.http.post(`${this.baseUrl}/create/`, {
      location_id: locationId,
      user_id: 1
    });
    obs.subscribe((data) => {
      this.getFullActivities();
    });
  }
}
