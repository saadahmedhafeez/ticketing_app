import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { user } from '../dummy-data/users-data';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public users: User[] = user;
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(){
    if (this.authService.loggedIn()) {
      return true
    }
    else {
      this.router.navigate(['/login'])
      return false
    }
  }
}
