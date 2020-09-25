import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './capitalize.pipe';
import { MenuComponent } from './menu/menu.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import { NgxEditorModule } from 'ngx-editor';
import { AuthService } from './auth.service';
import { CKEditorModule } from 'ng2-ckeditor';  
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { NgxTextEditorModule } from 'ngx-text-editor';
import { CommentsComponent } from './comments/comments.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { NgxSpinnerModule } from "ngx-spinner";

let firebaseConfig = {
  apiKey: "AIzaS*****PC4R_qXk****4i4ie********",
  authDomain: "phoenix-******.firebaseapp.com",
  databaseURL: "https://phoenix-*****.firebaseio.com",
  projectId: "phoenix-******",
  storageBucket: "phoenix-******.appspot.com",
  messagingSenderId: "************",
  appId: "1:295*********:web:6*************d9b",
  measurementId: "G-9********P"
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
   
    SignupComponent,
   
    LoginComponent,
   
    HomeComponent,
   
    CapitalizePipe,
   
    MenuComponent,
   
    MyblogsComponent,
   
    ProfileComponent,
   
    CreateComponent,
   
    PostComponent,
   
    ViewComponent,
   
    CommentsComponent,
   
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEditorModule,
    ReactiveFormsModule,
    FormsModule,
    CKEditorModule,  
    NgxTextEditorModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
