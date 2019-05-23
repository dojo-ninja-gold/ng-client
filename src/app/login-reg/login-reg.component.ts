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

  constructor(private userService: UsersService) { }

  ngOnInit() {
  }

  submitRegister() {
    this.userService.createUser(this.registerData);
  }

  submitLogin() {
    this.userService.loginUser(this.loginData);
  }
}
