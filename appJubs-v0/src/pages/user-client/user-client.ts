import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the UserClient page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-client',
  templateUrl: 'user-client.html'
})
export class UserClientPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello UserClientPage Page');
  }

}
