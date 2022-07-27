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
  status = 'Please choose an image and click upload';

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
        this.status = 'Please upload Avatar!';
      }
      if (JSON.stringify(data) === JSON.stringify(this.success)){
        this.status = 'Change Avatar success!';
        this.tokenService.setAvatar(this.form.avatar);
        window.location.reload();
      }
    }, error => {
      alert('Change avatar Failed!');
    });
  }

  onUploadAvatar($event: any) {
    this.form.avatar = $event;
  }
}
