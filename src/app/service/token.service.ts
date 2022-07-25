import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
const TOKEN_KEY = 'Token_Key';
const NAME_KEY = 'Name_Key';
const ROLE_KEY = 'Role_Key';
const ID_KEY = 'Id_Key';
const AVATAR_KEY = 'Avatar_Key';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private roles: Array<string> = [];
  constructor(private router: Router) { }
  public setToken(token: string){
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string{
    // @ts-ignore
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public getId(): any{
    return window.sessionStorage.getItem(ID_KEY);
  }

  public setId(id: any){
    window.sessionStorage.removeItem(ID_KEY);
    window.sessionStorage.setItem(ID_KEY, id);
  }

  public setName(name: string){
    window.sessionStorage.removeItem(NAME_KEY);
    window.sessionStorage.setItem(NAME_KEY, name);
  }
  public getName(): string{
    // @ts-ignore
    return window.sessionStorage.getItem(NAME_KEY);
  }
  public getAvatar(): string{
    // @ts-ignore
    return window.sessionStorage.getItem(AVATAR_KEY);
  }
  public setAvatar(avatar: string){
    window.sessionStorage.removeItem(AVATAR_KEY);
    window.sessionStorage.setItem(AVATAR_KEY, avatar);
  }
  public setRole(roles: string[]){
    window.sessionStorage.removeItem(ROLE_KEY);
    // @ts-ignore
    window.sessionStorage.setItem(ROLE_KEY, JSON.stringify(roles));
  }
  public getRole(): string[]{
    this.roles = [];
    if (sessionStorage.getItem(TOKEN_KEY)){
      // @ts-ignore
      JSON.parse(sessionStorage.getItem(ROLE_KEY)).forEach(role => {
        this.roles.push(role.authority);
      });
    }
    return this.roles;
  }
  public logOut(){
    window.sessionStorage.clear();
    // this.router.navigate([''])
    window.location.reload();
  }
}
