import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './form-login/register/register.component';
import { LoginComponent } from './form-login/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CreatePostComponent } from './post/create-post/create-post.component';
import { ShowListPostComponent } from './post/show-list-post/show-list-post.component';
import { HomeComponent } from './post/home/home.component';
import { HeaderComponent } from './post/header/header.component';
import { FooterComponent } from './post/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    CreatePostComponent,
    ShowListPostComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
