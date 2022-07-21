// @ts-ignore
// @ts-ignore
// @ts-ignore

import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../service/token.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //@ts-ignore
  name: string;
  checkLogin = false;
  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.checkLogin = true;
      this.name = this.tokenService.getName();
      // this.avatar = this.tokenService.getAvatar();
      // console.log('avatar   ====> ', this.avatar);
    }
  }

  logOut(){
    this.tokenService.logOut();
  }
}

