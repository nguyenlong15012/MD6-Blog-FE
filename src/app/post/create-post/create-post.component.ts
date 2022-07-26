import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../service/user.service";
import {TokenService} from "../../service/token.service";
import {PostService} from "../../service/post.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/User";
import {Post} from "../../model/post";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  congkhai = 'Mọi người';

  //@ts-ignore
  users:User={};
  obj:any;
  form = new FormGroup({
    title: new FormControl(''),
    createAt: new FormControl(''),
    status: new FormControl(''),
    description: new FormControl(''),
    tag: new FormControl(''),
    content: new FormControl(''),
    user: new FormControl(''),
  })
  constructor(private httpClient: HttpClient,
              private userService: UserService,
              private tokenService: TokenService,
              private postService: PostService,
              private router: Router,
             ) { }
  ngOnInit(): void {
    this.userService.getAll().subscribe((data)=> {
      console.log(data)
      this.users = data;
    })
  }
  add() {
    this.obj = {
      title: this.form.value.title,
      createAt: this.form.value.createAt,
      status: this.form.value.status,
      description : this.form.value.description,
      tag : this.form.value.tag,
      content : this.form.value.content,
      user: {
        id: this.tokenService.getId()
      }
    }
    this.postService.save(this.obj).subscribe(()=>{
      alert('Thành công');
      this.router.navigate(["/"])
    }, error => {
      alert('Lỗi');
    })
  }
  // showConfirm(id: any){
  //   this.idDelete = id
  //   // @ts-ignore
  //   $('#exampleModal').modal('show');
  // }
}
