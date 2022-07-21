import { Injectable } from '@angular/core';
import {SignUpForm} from "../model/SignUpForm";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {JwtResponse} from "../model/JwtResponse";
import {SignInForm} from "../model/SignInForm";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// API LOCAL
  private API_SIGNUP = environment.API_LOCAL + 'signup';
  private API_SIGNIN = environment.API_LOCAL + 'signin';
  private API_CHANGE_AVATAR = environment.API_LOCAL + 'change-avatar';

  // API SERVER
  //@ts-ignore
  data: boolean;
  // private API_SIGNUP = environment.API_SERVER + 'signup';
  // private API_SIGNIN = environment.API_SERVER + 'signin';

  constructor(private http: HttpClient) {
  }

  signUp(signup: SignUpForm): Observable<any> {
    return this.http.post<any>(this.API_SIGNUP, signup);
  }

  signIn(signIn: SignInForm): Observable<JwtResponse>{
    return this.http.post<JwtResponse>(this.API_SIGNIN, signIn);
  }
  changeAvatar(info: any): Observable<JwtResponse>{
    return this.http.put<JwtResponse>(this.API_CHANGE_AVATAR, info);
  }

  setData(data: boolean){
    this.data = data;
  }
  getData(): boolean{
    return this.data;
  }
}
