import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProPage } from '../user-pro/user-pro';

/*
  Generated class for the DadosPro page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dados-pro',
  templateUrl: 'dados-pro.html'
})
export class DadosProPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  onClick(){
    this.navCtrl.push(UserProPage);
  }

}
