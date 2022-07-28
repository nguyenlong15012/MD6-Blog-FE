import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../service/auth.service";
import {TokenService} from "../service/token.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  admin: any = ["ADMIN"]
  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkAdmin();
  }
  checkAdmin(){
    if (this.tokenService.getRole()[0] == "ADMIN") {
      return true;
    } else {
      this.router.navigate([''])
      return false;
    }
  }
}
