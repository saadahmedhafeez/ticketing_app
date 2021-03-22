import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedin = false;
  name : string | null = ''
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.isLogedIn
    .subscribe((res) => {
      this.loggedin = this.authService.loggedIn();
      this.name = localStorage.getItem('userName');
    });
  }
  
  logout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    this.authService.isLogedIn.next(false);
  }
}
