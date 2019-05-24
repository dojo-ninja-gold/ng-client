import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})
export class LoginRegComponent implements OnInit {
  registerData: any = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  }

  loginData: any = {
    email: '',
    password: '',
  }

  errors: string[] = [];

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  submitRegister() {
    let obs = this.userService.createUser(this.registerData);
    obs.subscribe(
      (data) => {
        localStorage.setItem('user_id', data.id.toString());
        this.redirectToDashboard();
      },
      (errResponse) => {
        this.errors = errResponse.error;
      }
    )
  }

  submitLogin() {
    let obs = this.userService.loginUser(this.loginData);
    obs.subscribe(
      (data) => {
        localStorage.setItem('user_id', data.id.toString());
        this.redirectToDashboard();
      },
      (errResponse) => {
        this.errors = errResponse.error;
      }
    )
  }

  redirectToDashboard() {
    this.router.navigate(['/dashboard'])
  }
}
