import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';
import { UserChoicePage } from '../user-choice/user-choice';
import { User } from '../../models/user';
import { AppjubsUsers } from '../../providers/appjubs-users';

declare var window: any;

/*
  Generated class for the UserLogin page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-login',
  templateUrl: 'user-login.html'
})
export class UserLoginPage {
  user: User;

  constructor(public navCtrl: NavController, private platform: Platform, private appjubsUsers: AppjubsUsers) {}

  public login() {
    this.platform.ready().then(() => {
      this.facebookLogin().then(success => {
        this.navCtrl.setRoot(UserChoicePage);
      }, (error) => {
        alert(error);
      });
    });
  }

  public facebookLogin(): Promise<any> {
    return new Promise(function(resolve, reject) {
      var browserRef = window.cordova.InAppBrowser.open("http://appjubs.herokuapp.com/login", "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
      browserRef.addEventListener("loadstart", (event) => {
        if ((event.url).indexOf("http://appjubs.herokuapp.com/access_token") === 0) {
          browserRef.removeEventListener("exit", (event) => {});
          browserRef.close();
          resolve();
        }
      });
      browserRef.addEventListener("exit", function(event) {
        reject("Login não realizado!");
      });
    });
  }
}
