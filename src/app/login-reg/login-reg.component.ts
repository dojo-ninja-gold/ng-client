import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})
export class LoginRegComponent implements OnInit {
  registerData: object = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  }

  loginData: object = {
    email: '',
    password: '',
  }

  errors: string[] = [];

  constructor(private userService: UsersService) { }

  ngOnInit() {
  }

  submitRegister() {
    let obs = this.userService.createUser(this.registerData);
    obs.subscribe(
      (data) => {
        localStorage.setItem('user_id', data.id);
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
        localStorage.setItem('user_id', data.id);
      },
      (errResponse) => {
        this.errors = errResponse.error;
      }
    )
  }
}
