import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FacebookLogin } from '../../util/facebook-login';
import { UserSelectPage } from '../user-select/user-select';
import { ScreenOrientation } from 'ionic-native';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    ScreenOrientation.lockOrientation('portrait');
  }

  onLogin(){
    FacebookLogin.login(response => {
      this.navCtrl.setRoot(UserSelectPage);
    }, error => {
      console.log(error);
    });
  }

}
