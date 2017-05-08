import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the UserPro page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-pro',
  templateUrl: 'user-pro.html'
})
export class UserProPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello UserProPage Page');
  }

}
