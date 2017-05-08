import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FacebookLogin } from '../../util/facebook-login';
import { Fire } from '../../providers/fire'
import { MessageMapPage } from '../message-map/message-map';

/*
  Generated class for the Friends page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html'
})
export class FriendsPage {

  friends: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private fire: Fire) {
    this.initPage();
  }

  private initPage(){
    FacebookLogin.getFriends(this.fire.user, friends => {
      this.friends = friends;
    });
  }

  private openMap(){
    this.navCtrl.push(MessageMapPage);
  }
}
