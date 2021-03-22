import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  myForm: any;
  show = true;
  constructor(private authService: AuthService, private router: Router, private translate: TranslateService) { 
    translate.setDefaultLang('en');
  }
  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl('saad@ikslogics.com'),
      password: new FormControl('123')
    });
  }

  loginProcess() {
    if (this.myForm.valid) {
      this.authService.login(this.myForm.value).subscribe(res => {
        if (res) {
          localStorage.setItem('userId', res['id']);
          localStorage.setItem('userName', res['name']);
          this.authService.isLogedIn.next(true);
          this.router.navigate(['/home'])
        }
        else
          alert('Invalid Credentials!');
      })
    }
  }

  title = 'ticketing-app';
  user = {
    name: 'Arthur',
    age: 42
  };

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  changeIcon(){
    this.show = !this.show;
  }
}