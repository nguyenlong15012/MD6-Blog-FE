import { Component, OnInit } from '@angular/core';
import {Post} from "../../model/post";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {PostService} from "../../service/post.service";
import {TokenService} from "../../service/token.service";
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {environment} from "../../../environments/environment.prod";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  list: Post[] = [];
  searchForm = new FormGroup({
    name: new FormControl('')
  })
  totalElements: number = 0;



  constructor(private httpClient: HttpClient,
              private postService: PostService,
              private tokenService: TokenService,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit(): void {
   this.pageCategory({page: 0, size: 10})
  }
  // ngOnInit(): void {
  //   this.postService.getAll().subscribe(result => {
  //     // @ts-ignore
  //     this.list = result;
  //     console.log(result);
  //   }, error => {
  //     console.log(error)
  //   });
  // }



  pageCategory(nextPage: any){
    this.postService.pageCategory(nextPage).subscribe(data => {
      console.log('data ====> ', data);
      // @ts-ignore
      this.list = data['content']
      // @ts-ignore
      console.log('data[content]', data['content']);
      // @ts-ignore
      this.totalElements = data['totalElements'];
    })
  }

}
