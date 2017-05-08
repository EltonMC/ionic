import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FacebookLogin } from '../../util/facebook-login';
import { Fire } from '../../providers/fire';
import { HomePage } from '../home/home';
import { UserSelectPage } from '../user-select/user-select';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private fire: Fire) {}

  onLogin(){
    FacebookLogin.login(response => {
      this.fire.login(response.accessToken , () => {
        this.navCtrl.setRoot(UserSelectPage);
      }, error => {
        alert(error);
      });
    }, error => {
      alert(error);
    });
  }

}
