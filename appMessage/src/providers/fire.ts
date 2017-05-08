import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import firebase from 'firebase';

@Injectable()
export class Fire{
  user: any = {};
  constructor(){
    var config = {
      apiKey: "AIzaSyDCV9FOZSNVSE93gKJ0yoGahGxSFBUa7ho",
      authDomain: "appmessage-3187d.firebaseapp.com",
      databaseURL: "https://appmessage-3187d.firebaseio.com",
      storageBucket: "appmessage-3187d.appspot.com",
      messagingSenderId: "401461638620"
    };
    firebase.initializeApp(config);
  }

  login (token: string, successCallback, errorCallback){
    let credential = firebase.auth.FacebookAuthProvider.credential(token);
    firebase.auth().signInWithCredential(credential).then( response => {
      this.setUser(token, response.providerData[0]);
      this.saveUser();
      successCallback();
    }, error => {
      errorCallback(error);
    });
  }

  private setUser(token: string, authData: any){
    this.user.name = authData.displayName;
    this.user.photo = authData.photoURL;
    this.user.id = authData.uid;
    this.user.token = token;
  }

  private saveUser(){
    firebase.database().ref('users').child(this.user.id).set({
      name: this.user.name,
      photo: this.user.photo
    })
  }

}
