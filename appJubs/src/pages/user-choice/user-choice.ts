import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { UserClientPage } from '../user-client/user-client';
import { UserProPage } from '../user-pro/user-pro';
import { User } from '../../models/user';
import { AppjubsUsers } from '../../providers/appjubs-users';

/*
  Generated class for the UserChoice page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-choice',
  templateUrl: 'user-choice.html'
})
export class UserChoicePage {
  user: User;
  login: string;

  constructor(public navCtrl: NavController, private navParams: NavParams, private appjubsUsers: AppjubsUsers, public loadingCtrl: LoadingController) {
    let loading = this.loadingCtrl.create({
      content: 'Aguarde um instante...'
    });
    loading.present();
    appjubsUsers.loadUser().subscribe(user => {
      this.user = user;
      loading.dismiss();
    })
  }

  goToClient(): void{
    this.navCtrl.push(UserClientPage);
  }

  goToPro(): void{
    this.navCtrl.push(UserProPage);
  }

}
