import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../../model/User";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../service/user.service";
import {TokenService} from "../../service/token.service";
import {PostService} from "../../service/post.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.css']
})
export class AdminUpdateComponent implements OnInit {

  form = new FormGroup({
    title: new FormControl(''),
    createAt: new FormControl(''),
    status: new FormControl(''),
    description: new FormControl(''),
    tag: new FormControl(''),
    content: new FormControl(''),
    user: new FormControl(''),
  })
  //@ts-ignore
  users:User={};
  obj:any;
  id:any;
  constructor(private httpClient: HttpClient,
              private userService: UserService,
              private tokenService: TokenService,
              private postService: PostService,
              private router:Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe((data)=> {
      this.users = data
    })
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = param.get('id');
      this.getPost(this.id);
    })

  }
  getPost(id: any) {
    this.postService.getById(id).subscribe(data => {
      console.log(data)
      // @ts-ignore
      this.form = new FormGroup({
        title: new FormControl(data.title),
        createAt: new FormControl(data.createAt),
        status: new FormControl(data.status),
        description: new FormControl(data.description),
        tag: new FormControl(data.tag),
        content: new FormControl(data.content),
      });
    })
  }
  update() {
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

    this.postService.update(this.obj,this.id).subscribe(()=>{
      this.router.navigate(["/admin"])
    }, error => {
      alert('Lỗi');
    })
  }
}
