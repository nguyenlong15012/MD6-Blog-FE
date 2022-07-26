import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {PostService} from "../../service/post.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Post} from "../../model/post";
import {TokenService} from "../../service/token.service";
import {Comment} from "../../model/Comment";
import {CommentService} from "../../service/comment.service";

@Component({
  selector: 'app-show-list-post',
  templateUrl: './show-list-post.component.html',
  styleUrls: ['./show-list-post.component.css']
})
export class ShowListPostComponent implements OnInit {
  obj:any;
  // @ts-ignore
  post: Post;
  // @ts-ignore
  commentList: Comment[] = [];
  checkLogin = false;
  checkDelEdit = false;
  idUser: any;
  idPost: any;
  idDelete: any;
  commentForm = new FormGroup({
    content : new FormControl()
  })
  constructor(
    private activateRoute: ActivatedRoute,
    private postService: PostService,
    private tokenService: TokenService,
    private router: Router,
    private commentService: CommentService) {
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.checkLogin = true;
    }
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
      this.idPost = id;
      this.getPost(id);
      this.getComment(id);
    });
    if (this.tokenService.getId() == this.idUser){
      this.checkDelEdit = true
    }
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

  getComment(idPost: any) {
    this.postService.findCommentByPost(idPost).subscribe(result =>{
      this.commentList = result
    })
  }
  getTimeLine(id: any) {
    if (id == this.tokenService.getId()) {
      this.router.navigate(['/my-page'])
    } else {
      this.router.navigate(['/friend-page/'+id]);
    }
  }
  createCmt(idPost: any){
    this.obj = {
      content : this.commentForm.value.content,
      user: {
        id: this.tokenService.getId()
      },
      post: {
        idPost: idPost
      }
    }
    // console.log('check',this.commentForm.value)
    this.commentService.save(this.obj).subscribe(() =>{
      // alert('thành công')
      this.commentForm.reset();
      this.getComment(idPost)
    }, error => {
      console.log(error)})
  }
  // nút cancel
  clearForm(){
    this.commentForm.reset()
  }
  //check hiện nút sửa xóa
  // @ts-ignore
  // checkDelete(idUser){
  //   if (idUser == this.tokenService.getId()){
  //     this.checkDelEdit = true;
  //   }
  // }

  showConfirm(id: any){
    this.idDelete = id
    // @ts-ignore
    $('#exampleModal').modal('show');
  }

  deleteCmt(id: any){
    this.commentService.delete(id).subscribe(data =>{
      this.getComment(this.idPost);
    });
  }
}
