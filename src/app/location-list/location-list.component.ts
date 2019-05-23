import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../locations.service';
import { $ } from 'protractor';
import { ActivitiesService } from '../activities.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  locations: object[];

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


// $.get('http://localhost:8000', function(data) {
//   console.log(data);
// })