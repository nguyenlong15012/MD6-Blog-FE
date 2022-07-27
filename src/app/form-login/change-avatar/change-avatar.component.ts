import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {TokenService} from "../../service/token.service";
import {Router} from "@angular/router";
import {ChangeAvatar} from "../../model/ChangeAvatar";

@Component({
  selector: 'app-change-avatar',
  templateUrl: './change-avatar.component.html',
  styleUrls: ['./change-avatar.component.css']
})
export class ChangeAvatarComponent implements OnInit {
  form: any = {};
  // @ts-ignore
  changeAvagtar: ChangeAvatar;
  error: any = {
    message: 'no'
  };
  success: any = {
    message: 'yes'
  };
  status = 'Chọn ảnh để tải lên';

  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.changeAvagtar = new ChangeAvatar(
      this.form.avatar
    );

    this.authService.changeAvatar(this.changeAvagtar).subscribe(data => {
      if (JSON.stringify(data) === JSON.stringify(this.error)){
        this.status = 'Vui lòng chọn ảnh!';
      }
      if (JSON.stringify(data) === JSON.stringify(this.success)){
        this.status = 'Upload thành công!';
        this.tokenService.setAvatar(this.form.avatar);
        window.location.reload();
      }
    }, error => {
      alert('Upload thất bại!');
    });
  }

  onUploadAvatar($event: any) {
    this.form.avatar = $event;
  }
}
