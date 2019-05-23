import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: object = {
    first_name: null,
    id: null,
    gold: null,
  }
  user$ = new BehaviorSubject<object>({
    first_name: null,
    id: null,
    gold: null,
  })

  baseUrl: string = 'http://localhost:8000/users'
  constructor(private http: HttpClient) { }

  getUser() {

  }

  createUser(userData: object): void {
    let obs = this.http.post<object>(`${this.baseUrl}/create/`, userData);
    obs.subscribe(
      (data) => {
        console.log(data);
      },
      (errors) => {
        console.log(errors);
      }
    )
  }

  loginUser(loginData: object): void {
    let obs = this.http.post<object>(`${this.baseUrl}/login/`, loginData);
    obs.subscribe(
      (data) => {
        console.log(data);
      },
      (errors) => {
        console.log(errors);
      }
    )
  }
}
