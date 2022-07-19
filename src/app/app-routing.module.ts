import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShowListPostComponent} from "./post/show-list-post/show-list-post.component";
import {CreatePostComponent} from "./post/create-post/create-post.component";
import {HomeComponent} from "./post/home/home.component";
import {LoginComponent} from "./form-login/login/login.component";
import {RegisterComponent} from "./form-login/register/register.component";
import {NhaComponent} from "./nha/nha.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: "Login"}},
  { path: 'register', component: RegisterComponent, data: { title: "Register"}},
  { path: 'home', component: NhaComponent},
  {path: "",component:HomeComponent},
  {path: "list-post/:id", component: ShowListPostComponent},
  {path: "create", component: CreatePostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
