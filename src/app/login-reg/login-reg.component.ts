import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  submitRegister() {
    console.log(this.registerData);
  }

  submitLogin() {
    console.log(this.loginData);
  }
}
