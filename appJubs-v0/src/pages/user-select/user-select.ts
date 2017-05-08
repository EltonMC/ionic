import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserClientPage } from '../user-client/user-client';
import { DadosProPage } from '../dados-pro/dados-pro';
/*
  Generated class for the UserSelect page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-select',
  templateUrl: 'user-select.html'
})
export class UserSelectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  goToClient(): void{
    this.navCtrl.push(UserClientPage);
  }

  goToPro(): void{
    this.navCtrl.push(DadosProPage);
  }
}
