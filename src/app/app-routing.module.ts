import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShowListPostComponent} from "./post/show-list-post/show-list-post.component";
import {CreatePostComponent} from "./post/create-post/create-post.component";
import {HomeComponent} from "./post/home/home.component";
import {LoginComponent} from "./form-login/login/login.component";
import {RegisterComponent} from "./form-login/register/register.component";
import {MypageComponent} from "./mypage/mypage.component";
import {FriendPageComponent} from "./friend-page/friend-page.component";
import {UpdateComponent} from "./post/update/update.component";
import {AdminUserComponent} from "./admin/admin-user/admin-user.component";
import {AdminPostComponent} from "./admin/admin-post/admin-post.component";
import {AdminUpdateComponent} from "./admin/admin-update/admin-update.component";
import {AdminDetailComponent} from "./admin/admin-detail/admin-detail.component";
import {AuthGuard} from "./security/auth.guard";
import {AdminGuard} from "./security/admin.guard";

const routes: Routes = [
  {path: 'login', component: LoginComponent, data: {title: "Login"}},
  {path: 'register', component: RegisterComponent, data: {title: "Register"}},
  {path: "", component: HomeComponent},
  {path: "create", component: CreatePostComponent, canActivate:[AuthGuard]},
  {path: "list-post/:id", component: ShowListPostComponent},
  {path: "my-page", component: MypageComponent , canActivate:[ AuthGuard]},
  {path: "friend-page/:id", component: FriendPageComponent, canActivate:[ AuthGuard]},
  {path: "update/:id", component: UpdateComponent, canActivate:[AuthGuard]},
  {path: "admin-update/:id", component: AdminUpdateComponent, canActivate:[AdminGuard]},
  {path: "admin-user", component: AdminUserComponent, canActivate:[AdminGuard]},
  {path: "admin-detail/:id", component: AdminDetailComponent, canActivate:[AdminGuard]},
  {path: 'admin', component: AdminPostComponent,canActivate: [AdminGuard], data: {title: 'Dashboard'}},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
