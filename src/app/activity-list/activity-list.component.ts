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
    this.activityService.getActivities();
    this.activityService.activities$
      .subscribe((data) => {
        this.activities = data;
      });
  }
}
