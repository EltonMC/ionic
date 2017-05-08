import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { User } from '../../models/user';
import { GithubUsers } from '../../providers/github-users';
import { UserDetailsPage } from '../user-details/user-details';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  users: User[]
  originalUser: User[];

  constructor(public navCtrl: NavController, private githubUsers: GithubUsers) {
    githubUsers.load().subscribe(users => {
      	this.users = users;
      	this.originalUser = users;
	  })
  }

  goToDetails(login: string){
  	this.navCtrl.push(UserDetailsPage, {login});
  }

  search(searchEvent){
  	let term = searchEvent.target.value
  	if (term.trim() == '' || term.trim().length < 3){
  		this.users = this.originalUser;
  	} else {
  		this.githubUsers.searchUsers(term).subscribe(users => {
  			this.users = users;
  		});
  	}
  }

}