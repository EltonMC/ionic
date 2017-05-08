import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { TestePage } from '../teste/teste';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }
onLogin(){
  this.navCtrl.setRoot("TestePage");
}
}
