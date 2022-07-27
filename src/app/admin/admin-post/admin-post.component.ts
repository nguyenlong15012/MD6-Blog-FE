import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {PostService} from "../../service/post.service";
import {TokenService} from "../../service/token.service";
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.component.html',
  styleUrls: ['./admin-post.component.css']
})
export class AdminPostComponent implements OnInit {

  list: any;
  searchForm = new FormGroup({
    title: new FormControl('')
  })
  idDelete: any;
  totalElements: number = 0;
//@ts-ignore
  name: string;
  checkLogin = false;
  constructor(private httpClient: HttpClient,
              private postService: PostService,
              private tokenService: TokenService,
              private router: Router,
              private userService: UserService) {

  }

  ngOnInit(): void {
    this.postService.getAll().subscribe(result => {
      this.list = result;
      console.log(result);
    }, error => {
      console.log(error)
    });
    if (this.tokenService.getToken()){
      this.checkLogin = true;
      this.name = this.tokenService.getName();
      // this.avatar = this.tokenService.getAvatar();
      // console.log('avatar   ====> ', this.avatar);
    }
  }



  pagePost(nextPage: any){
    this.postService.pagePost(nextPage).subscribe(data => {
      console.log('data ====> ', data);
      // @ts-ignore
      this.list = data['content']
      // @ts-ignore
      console.log('data[content]', data['content']);
      // @ts-ignore
      this.totalElements = data['totalElements'];
    })
  }
  nextPage(event: PageEvent) {
    console.log('event ====> ', event);
    const nextPage = {};
    // @ts-ignore
    nextPage['page'] = event.pageIndex.toString();
    // @ts-ignore
    nextPage['size'] = event.pageSize.toString();
    // @ts-ignore
    console.log('request[size]', nextPage['size']);
    this.pagePost(nextPage);
  }
  search() {
    this.postService.findAllByTitleContaining(this.searchForm.value.title).subscribe((data)=> {
      // @ts-ignore
      this.list=data;
      console.log(data)
    })
  }
  logOut(){
    this.tokenService.logOut();
    this.router.navigate(["/login"]);
  }
}
