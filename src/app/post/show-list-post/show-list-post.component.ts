import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {PostService} from "../../service/post.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Post} from "../../model/post";

@Component({
  selector: 'app-show-list-post',
  templateUrl: './show-list-post.component.html',
  styleUrls: ['./show-list-post.component.css']
})
export class ShowListPostComponent implements OnInit {

  // @ts-ignore
  post: Post;

  constructor(
    private activateRoute: ActivatedRoute,
    private postService: PostService) {
  }

  ngOnInit(): void {
    this.post = {
      title :'',
      createAt:'',
      status:'',
      description: '',
      tag: '',
      content: '',
      user:''
    }
    this.activateRoute.paramMap.subscribe((paraMap: ParamMap) => {
      const id = paraMap.get('id');
      this.getPost(id);
    });
  }

  getPost(id: any) {
    this.postService.getById(id).subscribe(yy => {
      this.post = yy;
    })
  }

  // deletePost(id: any){
  //   this.postService.delete(id).subscribe(data =>{
  //     console.log(data)
  //   })
  // }
}
