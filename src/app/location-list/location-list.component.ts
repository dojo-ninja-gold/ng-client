import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../locations.service';
import { ActivitiesService } from '../activities.service';
import { Location } from '../location';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  locations: Location[];

  constructor(
    private locationsService: LocationsService,
    private activityService: ActivitiesService
  ) { }
  
  ngOnInit() {
    this.getLocations();
  }

  getLocations() {
    let obs = this.locationsService.getLocations();
    obs.subscribe((data) => {
      this.locations = data;
    });
  }

  onClick(locationId: number) {
    this.activityService.createActivity(locationId);
  }
}