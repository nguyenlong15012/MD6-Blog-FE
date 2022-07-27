import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../service/user.service";
import {TokenService} from "../service/token.service";
import {PostService} from "../service/post.service";
import {ChangeAvatar} from "../model/ChangeAvatar";
import {AuthService} from "../service/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PageEvent} from "@angular/material/paginator";
import {Post} from "../model/post";

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.css']
})
export class MypageComponent implements OnInit {

  form: any = {};
  // @ts-ignore
  changeAvagtar: ChangeAvatar;
  error: any = {
    message: 'no'
  };
  success: any = {
    message: 'yes'
  };
  status = 'Please choose an image and click upload';

//@ts-ignore
  name: string;
  avatar: any;
  list: any;
  list1: Post[] = [];
  totalElements: number = 0;
  idDelete: any;

  constructor(private httpClient: HttpClient,
              private authService: AuthService,
              private router: Router,
              private userService: UserService,
              private tokenService: TokenService,
              private postService: PostService,
              private activatedRoute : ActivatedRoute) {
  }
  id:any =this.tokenService.getId()

  ngOnInit(): void {
    this.pagePost({page: 0, size: 3});
    this.getAllPostByUser(this.tokenService.getId());
    this.avatar = this.tokenService.getAvatar();
    this.name = this.tokenService.getName();
    // this.pagePost(this.tokenService.getId());
  }

  getAllPostByUser(id: any) {
    this.userService.getAllPostByUser(id).subscribe(result => {
      this.list = result;
      this.name = this.tokenService.getName();
      console.log('list -----> ',result);
      console.log('this.id ---> ', this.id)
    }, error => {
      console.log(error)
    });
  }

  deletePost(id: any) {
    this.postService.delete(id).subscribe(data =>{
      this.getAllPostByUser(this.tokenService.getId());
    })
  }
  showConfirm(id: any){
    this.idDelete = id
    // @ts-ignore
    $('#exampleModal').modal('show');
  }
  onSubmit() {
    this.changeAvagtar = new ChangeAvatar(
      this.form.avatar
    );

    this.authService.changeAvatar(this.changeAvagtar).subscribe(data => {
      if (JSON.stringify(data) === JSON.stringify(this.error)){
        // this.status = 'Please upload Avatar!';
        alert('Hãy chọn ảnh!')
      }
      if (JSON.stringify(data) === JSON.stringify(this.success)){
        // this.status = 'Change Avatar success!';
        alert('Thay đổi thành công!');
        this.tokenService.setAvatar(this.form.avatar);
        window.location.reload();
      }
    }, error => {
      alert('Thay đổi thất bại!');
    });
  }

  onUploadAvatar($event: any) {
    this.form.avatar = $event;
  }


  //Phân trang
  pagePost(nextPage: {page: number, size: number}){
    this.postService.pagePostUser(nextPage, this.id).subscribe((data: any) => {
      console.log('data ====> ', data);
      this.list1 = data.content;
      this.totalElements = data.totalElements;
    })
  }
  nextPage(event: PageEvent) {
    console.log('event ====> ', event);
    const nextPage = {
      page: event.pageIndex,
      size: event.pageSize,
    };
    console.log('request[size]', nextPage['size']);
    this.pagePost(nextPage);
  }
}
