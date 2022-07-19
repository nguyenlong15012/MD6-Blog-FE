import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./form-login/login/login.component";
import {RegisterComponent} from "./form-login/register/register.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: "Login"}},
  { path: 'register', component: RegisterComponent, data: { title: "Register"}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
