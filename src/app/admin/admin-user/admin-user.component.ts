import { Component, OnInit } from '@angular/core';
import {User} from "../../model/User";
import {HttpClient} from "@angular/common/http";
import {PostService} from "../../service/post.service";
import {TokenService} from "../../service/token.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  listUser: User[] = [];
  id:any;
  constructor(private httpClient: HttpClient,
              private postService: PostService,
              private tokenService: TokenService,
              private router: Router,
              private userService: UserService,
              private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe((paramMap: ParamMap) => {
    // @ts-ignore
    this.id = +paramMap.get('id');
    this.findById(this.id);
  }); }

  ngOnInit(): void {
    this.userService.getAll().subscribe(result => {
    // @ts-ignore
    this.listUser = result;
    console.log(result);
  }, error => {
    console.log(error)
  });
  }

  deletePost(id: any) {
    this.userService.delete(id).subscribe(() => {
      this.router.navigate(['/']);
    })
  }
  findById(id: any) {
    // this.userService.getById(id).subscribe(data1 => {
    //   console.log(data1)
      this.userService.delete(id).subscribe(data =>{
        this.userService.getAllPostByUser(id).subscribe(i=>{
          this.postService.delete(id)
        })
        console.log(data)
    // })
    });
  }
}
