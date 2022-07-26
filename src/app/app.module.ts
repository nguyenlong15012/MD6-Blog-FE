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
import {MypageComponent} from "./mypage/mypage.component";
import {FriendPageComponent} from "./friend-page/friend-page.component";
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { UpdateComponent } from './post/update/update.component';
import { AdminComponent } from './admin/admin/admin.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import {UploadAvatarComponent} from "./upload/upload-avatar/upload-avatar.component";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment.prod";
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    CreatePostComponent,
    ShowListPostComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MypageComponent,
    FriendPageComponent,
    UpdateComponent,
    AdminComponent,
    NavbarComponent,
    UploadAvatarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    EditorModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
  ],
  providers: [ { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
