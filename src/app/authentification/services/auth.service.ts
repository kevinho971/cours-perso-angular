import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;
  provider: firebase.auth.GoogleAuthProvider;
  facebook: firebase.auth.FacebookAuthProvider;

  constructor(private angularfireAuth: AngularFireAuth, private afDb: AngularFireDatabase) {
    this.user$ = angularfireAuth.authState;
    this.provider = new firebase.auth.GoogleAuthProvider();
    this.facebook = new firebase.auth.FacebookAuthProvider();
  }

  register(email: string, password: string) {
    return this.angularfireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.angularfireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  loginWithGoogle() {
    return this.angularfireAuth.auth.signInWithPopup(this.provider);
  }

  loginWithFacebook(){
    return this.angularfireAuth.auth.signInWithPopup(this.facebook);
  }

  logout() {
    this.angularfireAuth.auth.signOut();
  }

  sendEmailVerification() {
    const user = firebase.auth().currentUser;
    if (user) {
      console.log('user in sendEmailVerification', user);
      user.sendEmailVerification().then(() => {
        console.log('email envoyé');
      }).catch((error) => {
        console.error('error sending email', error);
      });
    }
  }
}
