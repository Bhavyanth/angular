import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

let firebaseConfig = {
  apiKey: "AIzaSyCqKcPC4R_qXkZn64i4ieCF20doK9v8GDo",
  authDomain: "phoenix-72e4e.firebaseapp.com",
  databaseURL: "https://phoenix-72e4e.firebaseio.com",
  projectId: "phoenix-72e4e",
  storageBucket: "phoenix-72e4e.appspot.com",
  messagingSenderId: "295030545282",
  appId: "1:295030545282:web:6a8c12b7e6fc9005b44d9b",
  measurementId: "G-9E6T9SZ2TP"
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
   
    SignupComponent,
   
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
