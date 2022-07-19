import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { HomeSinginComponent } from './home-singin/home-singin.component';
import { HttpClientModule} from "@angular/common/http";
=======
import { RegisterComponent } from './form-login/register/register.component';
import { LoginComponent } from './form-login/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
>>>>>>> 2039aeeb22328fbdc7fb38bf77e59b96e612efc5

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
<<<<<<< HEAD
    HomeComponent,
    NavComponent,
    HomeSinginComponent
=======

>>>>>>> 2039aeeb22328fbdc7fb38bf77e59b96e612efc5
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule,
    ReactiveFormsModule,
=======
    ReactiveFormsModule,
    BrowserAnimationsModule,
>>>>>>> 2039aeeb22328fbdc7fb38bf77e59b96e612efc5
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
