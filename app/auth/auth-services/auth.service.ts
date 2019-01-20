import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase/app';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  user: User;
  errMessage: string;
  posMessage: string;

  constructor(private angularFire: AngularFireAuth, private router: Router) {
    angularFire.authState.subscribe(user => {
      this.user = user; // token caly czas sprawdzany
    });
   }

   errorHandler(err: any) {
    console.log(err.message);
    this.errMessage = err;
   }
   clearError() {
     this.errMessage = '';
   }

  login (email: string, password: string) {
    this.angularFire.auth.signInWithEmailAndPassword(email, password).then(user => {
      console.log(user);
      this.router.navigate(['/home']);
    }).catch(err => {
      this.errorHandler(err);
    });
  }

  signUp(email: string, password: string) {
    this.angularFire.auth.createUserWithEmailAndPassword(email, password).then(user => {
      console.log(user);
      this.router.navigate(['/home']);
    }).catch(err => {
      this.errorHandler(err);
    });
  }

  logOut() {
    this.angularFire.auth.signOut();
  }

  signInGoogle() {
    this.angularFire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      credential => {
        this.user = credential.user;
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }

  getUser(): User {
    return this.user;
  }

  resetPassword(email: string) {
    const auth = firebase.auth();
    return auth.sendPasswordResetEmail(email)
      .then(() => this.posMessage = 'email send')
      .catch((error) => this.errorHandler(error));
  }
  clearPosMessage() {
    this.posMessage = '';
  }
}
