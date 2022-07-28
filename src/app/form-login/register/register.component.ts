import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import {SignUpForm} from "../../model/SignUpForm";
import {AuthService} from "../../service/auth.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  status = 'Please fill in the form to register';
  form: any = {};
  hide = true;
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]),
    confirmPassword: new FormControl('', [Validators.required]),
     role: new FormControl(''),
  })

  constructor( private authService: AuthService,
               private router: Router) { }

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

  get role(){
    return this.registerForm.get('role');
  }
  ngOnInit(): void{
    window.scroll(0,0);

  }

  // onSubmit() {
  //   console.log(this.registerForm.value);
  // }
  //@ts-ignore
  signUpForm: SignUpForm;
  error1: any = {
    message: 'no_user'
  };
  error2: any = {
    message: 'no_email'
  };
  success: any = {
    message: 'Create Success!'
  };
  onSubmit() {
    this.signUpForm = new SignUpForm(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password,
    );
    console.log('vao mail chua  ====> ', this.form.email)
    this.authService.signUp(this.signUpForm).subscribe(data => {
      console.log(data)
      // tslint:disable-next-line:triple-equals
      if (JSON.stringify(data) == JSON.stringify(this.error1)){
        this.status = 'username is existed! Please try again!';
        alert('The username is existed! Please try again!')
      }
      // tslint:disable-next-line:triple-equals
      if (JSON.stringify(data) == JSON.stringify(this.error2)){
        this.status = 'The email is existed! Please try again!';
        alert('The email is existed! Please try again!')
      }
      // tslint:disable-next-line:triple-equals
      if (JSON.stringify(data) == JSON.stringify(this.success)){
        this.status = 'Create account success!';
        this.router.navigate(['/login']);
      }
    });
  }
}
