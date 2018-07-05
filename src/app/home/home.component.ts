import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  login(){
    let provider = new auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    this.afAuth.auth.signInWithPopup(provider)
      .then(function(result){
        let newUser = result.user;
        console.log(newUser);
      });
  }

  logout(){
    this.afAuth.auth.signOut();
  }

}
