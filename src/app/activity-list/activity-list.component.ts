import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../activities.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  activities: object[];

  constructor(private activityService: ActivitiesService) { }

  ngOnInit() {
    this.getActivities();
  }

  getActivities() {
    let obs = this.activityService.getActivities();
    obs.subscribe((data) => {
      this.activities = data;
    });
  }
}
