import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {ChecklistModel} from '../../models/checklist-model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {
    new ChecklistModel('my checklist');
  }

}
