import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShowListPostComponent} from "./post/show-list-post/show-list-post.component";
import {CreatePostComponent} from "./post/create-post/create-post.component";
import {HomeComponent} from "./post/home/home.component";
import {LoginComponent} from "./form-login/login/login.component";
import {RegisterComponent} from "./form-login/register/register.component";
import {MypageComponent} from "./mypage/mypage.component";
import {FriendPageComponent} from "./friend-page/friend-page.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: "Login"}},
  { path: 'register', component: RegisterComponent, data: { title: "Register"}},
  {path: "",component:HomeComponent},
  {path: "list-post/:id", component: ShowListPostComponent},
  {path: "create", component: CreatePostComponent},
  {path: "my-page", component: MypageComponent},
  {path: "friend-page", component: FriendPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
