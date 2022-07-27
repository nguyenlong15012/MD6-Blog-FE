import { Component, OnInit } from '@angular/core';
import {User} from "../../model/User";
import {HttpClient} from "@angular/common/http";
import {PostService} from "../../service/post.service";
import {TokenService} from "../../service/token.service";
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  listUser: User[] = [];

  constructor(private httpClient: HttpClient,
              private postService: PostService,
              private tokenService: TokenService,
              private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(result => {
    // @ts-ignore
    this.listUser = result;
    console.log(result);
  }, error => {
    console.log(error)
  });
  }

}
