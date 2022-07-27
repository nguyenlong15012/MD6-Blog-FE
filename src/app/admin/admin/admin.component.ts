import { Component, OnInit } from '@angular/core';
import {Post} from "../../model/post";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {PostService} from "../../service/post.service";
import {TokenService} from "../../service/token.service";
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {User} from "../../model/User";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  list: any;
  searchForm = new FormGroup({
    title: new FormControl('')
  })
  idDelete: any;
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
  }
  // showConfirm(id: any){
  //   this.idDelete = id
  //   // @ts-ignore
  //   $('#exampleModal').modal('show');
  // }
}
