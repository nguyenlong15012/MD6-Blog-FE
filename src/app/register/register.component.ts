import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl(),
    // role: new FormControl(),
  })
  constructor() { }

  ngOnInit() {
  }
  get name(){
    return this.registerForm.get('name');
  }

  get password() {
    return this.registerForm.get('password');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get username() {
    return this.registerForm.get('username');
  }
  onSubmit() {
    console.log(this.registerForm.value);
  }

}
