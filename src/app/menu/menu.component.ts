import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  loggedIn: boolean = false;
  user: any;
  photoURL: any;
  username: any;
  users: any={};
  
  constructor(public authService: AuthService, public activatedRoute: ActivatedRoute) {
    
   
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

  ngOnInit() {
   
  }
  logout(){
    firebase.auth().signOut();

  }

  getProfile(id: string){
    
    firebase.firestore().collection("users").doc(id).get().then((documentSnapshot)=>{
      this.user = documentSnapshot.data();
      this.user.displayName = this.user.firstName;
      this.user.id = documentSnapshot.id;
      
    }).catch((error)=>{
      console.log(error);
    })
  }


}
