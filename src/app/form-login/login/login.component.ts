import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SignInForm} from "../../model/SignInForm";
import {AuthService} from "../../service/auth.service";
import {TokenService} from "../../service/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // @ts-ignore
  returnUrl: string;
  // @ts-ignore
  adminUrl: string;
  hide = true;
  form: any = {};
  //@ts-ignore
  signInForm: SignInForm;
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]),
  });

  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private router: Router) { }

  get password() {
    return this.loginForm.get('password');
  }

  get username(){
      return this.loginForm.get('username');
  }
  ngOnInit(): void{
    this.returnUrl = '';
    this.adminUrl = '/admin';
  }
  ngSubmit(){
    console.log('vao chua ====>')
    this.signInForm = new SignInForm(
      this.form.username,
      this.form.password
    );
    console.log('login==============', this.signInForm);
    this.authService.signIn(this.signInForm).subscribe(data => {
      if (data.token !== undefined){
        this.tokenService.setToken(data.token);
        this.tokenService.setName(data.name);
        this.tokenService.setRole(data.roles);
        this.tokenService.setId(data.id);
        this.tokenService.setAvatar(data.avatar);
        if (data.roles[0].authority == "ADMIN"){
          this.router.navigate([this.adminUrl]).then(()  => {
            window.location.reload();
          });
        }else {
          this.router.navigate([this.returnUrl]).then(() => {
            window.location.reload();
          })
        }
      }
    });
  }
}
