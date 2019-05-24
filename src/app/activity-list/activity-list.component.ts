import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../activities.service';
import { Activity } from '../activity';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  activities: Activity[];

  constructor(private activityService: ActivitiesService) { }

  ngOnInit() {
    // listen for updates to activities$
    this.activityService.activities$
      .subscribe((data) => {
        this.activities = data;
      });

    // make the service update activities$
    this.activityService.getFullActivities();
  }
}
