import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, forkJoin } from 'rxjs';
import { LocationsService } from './locations.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  baseUrl: string = 'http://localhost:8000/activities';
  activities: any[] = [];
  activities$ = new BehaviorSubject<any[]>([]);

  constructor(
    private http: HttpClient,
    private locationService: LocationsService,
    private userService: UsersService
  ) { }

  getActivities(): Observable<any[]> {
    const userId: number = localStorage.getItem('user_id');
    if(userId === null) {
      console.log('user not found');
    } else {
      return this.http.get<any[]>(`${this.baseUrl}/${userId}`);
    }
  }

  getFullActivities(): void {
    forkJoin(
      this.getActivities(),
      this.locationService.getLocations()
    ).subscribe(([activities, locations]) => {
      let totalGold = 0;
      for(let activity of activities) {
        totalGold += activity.fields.gold;
        for(let location of locations) {
          if(activity.fields.location === location.pk) {
            activity.fields.location = location.fields.name;
            break;
          }
        }
      }
      this.userService.updateGold(totalGold);
      this.activities = activities;
      this.activities$.next(this.activities);
    })
  }

  createActivity(locationId: number): void {
    const userId: number = localStorage.getItem('user_id');
    if(userId === null) {
      console.log('user not found');
    } else {
      let obs = this.http.post(`${this.baseUrl}/create/`, {
        location_id: locationId,
        user_id: userId
      });
      obs.subscribe((data) => {
        this.getFullActivities();
      });
    }
  }
}
