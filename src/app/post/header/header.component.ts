// @ts-ignore
// @ts-ignore
// @ts-ignore

import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../service/token.service";
import {Router} from "@angular/router";
import {PostService} from "../../service/post.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //@ts-ignore
  name: string;
  checkLogin = false;
  searchForm: any;

  constructor(
    private postService: PostService,
    private tokenService: TokenService,
    private router: Router,
    private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group(
      {
        nameSearch: ['']
      });
    if (this.tokenService.getToken()) {
      this.checkLogin = true;
      this.name = this.tokenService.getName();
      // this.avatar = this.tokenService.getAvatar();
      // console.log('avatar   ====> ', this.avatar);
    }
  }

  search() {
    this.router.navigate(['/search'], {queryParams: {name: this.searchForm.value.nameSearch}});
  }

  logOut() {
    this.tokenService.logOut();
  }
}

