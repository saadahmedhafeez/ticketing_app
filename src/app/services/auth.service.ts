import { Injectable } from '@angular/core';

import * as users from '../dummy-data/users-data'
import { BehaviorSubject, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public users = users;
  public isLogedIn = new BehaviorSubject<boolean>(false);
  constructor() { }

  login(data: any) : Observable<any>{
    for (let i = 0; i < this.users.user.length; i++) {
      if (this.users.user[i]['email'] === data['email'] &&
        this.users.user[i]['password'] === data['password']) {
        return of(this.users.user[i]);
      }
    }
    return of(false);
  }

  public loggedIn(): boolean {
    return !!localStorage.getItem('userId')
  }
}