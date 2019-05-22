import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../locations.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  locations: object[];

  constructor(private locationsService: LocationsService) { }
  
  ngOnInit() {
    this.getLocations();
  }

  getLocations() {
    let obs = this.locationsService.getLocations();
    obs.subscribe((data) => {
      this.locations = data;
    });
  }
}


// $.get('http://localhost:8000', function(data) {
//   console.log(data);
// })