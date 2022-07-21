import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {HttpClient} from "@angular/common/http";
import {PostService} from "../service/post.service";

@Component({
  selector: 'app-friend-page',
  templateUrl: './friend-page.component.html',
  styleUrls: ['./friend-page.component.css']
})
export class FriendPageComponent implements OnInit {
  list: any;
  constructor(private httpClient: HttpClient,
              private userService: UserService,
              private postService: PostService) { }

  ngOnInit(): void {
  }
  getAllPostByUser(id: any){
    this.userService.getAllPostByUser(id).subscribe(data =>{
      this.list = data;
    }, error => {
      console.log(error)
    });
  }

}
