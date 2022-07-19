import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]),
  })

  constructor() { }

  get password() {
    return this.loginForm.get('password');
  }

  get username(){
      return this.loginForm.get('username');
  }
  ngOnInit() {
  }
  Submit() {
    console.log(this.loginForm.value);
  }
}
