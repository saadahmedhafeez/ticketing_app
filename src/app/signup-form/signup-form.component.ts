import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl('', [Validators.required,
      Validators.minLength(3), 
      UsernameValidators.cannotContainsSpace
    ],
    UsernameValidators.shouldBeUnique),
    password: new FormControl('', Validators.required)
  });

  login(){
    this.form.setErrors({
      invalidLogin: true
    });
    // let isValid = authService.login(this.form.vlaue);
    // if(!isValid){
      
    // }
  }


  get username(){
    return this.form.controls['username']
  }
}
