import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {PostService} from "../../service/post.service";
import {TokenService} from "../../service/token.service";
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {Post} from "../../model/post";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list: Post[] = [];
  searchForm = new FormGroup({
    name: new FormControl('')
  })
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
    this.postService.findAllPublicStatus().subscribe(result => {
        // @ts-ignore
      this.list = result;
        console.log(result);
      }, error => {
        console.log(error)
    });
  }

  getTimeLine(id: any) {
    if (id == this.tokenService.getId()) {
      this.router.navigate(['/my-page'])
    } else {
      this.router.navigate(['/friend-page/'+id]);
    }
  }

}
