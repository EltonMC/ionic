import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { User } from '../models/user';

/*
  Generated class for the AppjubsUsers provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AppjubsUsers {
  apiJubs = 'http://appjubs.herokuapp.com';

  constructor(public http: Http) {}
  
  // Load user apiJubs
  loadUser(): Observable<User> {
    return this.http.get(`${this.apiJubs}/login`)
      .map(res => <User>res.json());
  }

}
