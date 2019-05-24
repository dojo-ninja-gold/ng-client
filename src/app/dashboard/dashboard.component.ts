import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    if(localStorage.getItem('user_id') === null) {
      this.router.navigate(['/']);
    }
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/']);
  }
}
