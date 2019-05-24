import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: User = {
    first_name: null,
    id: null,
    gold: null,
  }
  user$ = new BehaviorSubject<User>({
    first_name: null,
    id: null,
    gold: null,
  })

  baseUrl: string = 'http://localhost:8000/users'
  constructor(private http: HttpClient) { }

  getUser() {

  }

  createUser(userData: object): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/create/`, userData);
  }

  loginUser(loginData: object): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/login/`, loginData);
  }

  logout() {
    localStorage.clear();
  }

  updateGold(goldAmt: number): void {
    this.user.gold = goldAmt;
    this.user$.next(this.user);
  }
}
