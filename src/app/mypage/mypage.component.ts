import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../service/user.service";
import {TokenService} from "../service/token.service";
import {PostService} from "../service/post.service";

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.css']
})
export class MypageComponent implements OnInit {
//@ts-ignore
  name: string;
  list: any;

  constructor(private httpClient: HttpClient,
              private userService: UserService,
              private tokenService: TokenService,
              private postService: PostService) {
  }

  ngOnInit(): void {
    this.getAllPostByUser(this.tokenService.getId())
  }

  getAllPostByUser(id: any) {
    this.userService.getAllPostByUser(id).subscribe(result => {
      this.list = result;
      this.name = this.tokenService.getName();
      console.log(result);
    }, error => {
      console.log(error)
    });
  }

  deletePost(id: any) {
    this.postService.delete(id).subscribe(data =>{
        this.getAllPostByUser(this.tokenService.getId())
    })
  }

  showConfirm(id: any){
    // @ts-ignore
    $('#exampleModal').modal('show');
  }
}
