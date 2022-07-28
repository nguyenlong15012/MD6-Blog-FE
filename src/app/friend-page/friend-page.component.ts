import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../service/user.service";
import {PostService} from "../service/post.service";
import {User} from "../model/User";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {TokenService} from "../service/token.service";

@Component({
  selector: 'app-friend-page',
  templateUrl: './friend-page.component.html',
  styleUrls: ['./friend-page.component.css']
})
export class FriendPageComponent implements OnInit {
  list: any;
  // @ts-ignore
  user: User;
  constructor(private httpClient: HttpClient,
              private userService: UserService,
              private postService: PostService,
              private activateRoute: ActivatedRoute,
             ) {
  };

  ngOnInit(): void {
    window.scroll(0,0);

    this.user = {
      id: '',
      name: '',
      username: ''
    }
    this.activateRoute.paramMap.subscribe((paraMap: ParamMap) => {
      const id = paraMap.get('id');
      this.getAllPostByUser(id)
  })
  }
  getAllPostByUser(id: any) {
    this.userService.getAllPostByUser(id).subscribe(result => {
      this.list = result;
    }, error => {
      console.log(error)
    });
  }
}
