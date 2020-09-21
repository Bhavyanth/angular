import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm: FormGroup;
  message: string = "";
  userError: any;
  loggedIn: boolean = false;
  user: any;

  constructor(public fb: FormBuilder, public authService: AuthService) {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: this.checkIfMatchingPasswords("password", "confirmPassword")
    })

    this.user = firebase.auth().currentUser;

    if(this.user){
      this.loggedIn = true;
    }else{
      this.loggedIn=false;
    }

    firebase.auth().onAuthStateChanged((user) =>{

      if(user){
        this.loggedIn=true;
      }else{
        this.loggedIn=false;
      }

    })


   }

checkIfMatchingPasswords(passwordKey: string, confirmPasswordKey: string){
  return (group: FormGroup) => {
    let password = group.controls[passwordKey];
    let confirmPassword = group.controls[confirmPasswordKey];
    if (password.value == confirmPassword.value){
      return;
    }else{
      confirmPassword.setErrors({
        notEqualToPassword: true
      })
    }
  }
}

  onSubmit(signupform){
    let email: string = signupform.value.email;
    let password: string = signupform.value.password;
    let firstName: string = signupform.value.firstName;
    let lastName: string = signupform.value.lastName;

    this.authService.signup(email, password, firstName, lastName).then((user: any) => {
      
          firebase.firestore().collection("users").doc(user.uid).set({
            firstName: signupform.value.firstName,
            lastName: signupform.value.lastName,
            email: signupform.value.email,
            photoURL: user.photoURL,
            interests: "",
            bio: "",
            hobbies: ""
          }).then(()=>{
            this.message = "You have signed up successfully. Please Login."
          })
          

    }).catch((error) =>{
      console.log(error);
      this.userError = error;
    })
   
  }
  ngOnInit() {
  }

}
