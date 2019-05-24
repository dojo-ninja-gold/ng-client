import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.css']
})
export class GoldComponent implements OnInit {
  gold: number;
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.user$.subscribe((data) => {
      this.gold = data.gold;
    })
  }

}
