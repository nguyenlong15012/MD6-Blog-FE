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
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatRadioModule} from "@angular/material/radio";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { ChangeAvatarComponent } from './form-login/change-avatar/change-avatar.component';

import {Ng2SearchPipeModule} from "ng2-search-filter";
import {httpInterceptorProviders} from "./security/auth.interceptor";
import {MatPaginatorModule} from "@angular/material/paginator";
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
    UploadAvatarComponent,
    ChangeAvatarComponent
  ],
  imports: [
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    EditorModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    Ng2SearchPipeModule,
    MatPaginatorModule
  ],
  providers: [httpInterceptorProviders, { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
