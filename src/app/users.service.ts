import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: any = {
    first_name: null,
    id: null,
    gold: null,
  }
  user$ = new BehaviorSubject<any>({
    first_name: null,
    id: null,
    gold: null,
  })

  baseUrl: string = 'http://localhost:8000/users'
  constructor(private http: HttpClient) { }

  getUser() {

  }

  createUser(userData: object): Observable<any> {
    return this.http.post<object>(`${this.baseUrl}/create/`, userData);
  }

  loginUser(loginData: object): Observable<any> {
    return this.http.post<object>(`${this.baseUrl}/login/`, loginData);
  }

  logout() {
    localStorage.clear();
  }

  updateGold(goldAmt: number): void {
    this.user.gold = goldAmt;
    this.user$.next(this.user);
  }
}
