import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { User } from '../../models/user';

declare var window: any;
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   private feeds: Array<any>;

    public constructor(public navCtrl: NavController, private platform: Platform, private http: Http) {}

 public login() {
    this.platform.ready().then(() => {
        this.facebookLogin().then(success => {
            alert(this.feeds);
        }, (error) => {
            alert(error);
        });
    });
}

public facebookLogin(): Promise<any> {
    return new Promise(function(resolve, reject) {
        var browserRef = window.cordova.InAppBrowser.open("http://appjubs.herokuapp.com/login", "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
        browserRef.addEventListener("loadstart", (event) => {
            alert(event.url);
           /* if ((event.url).indexOf("http://appjubs.herokuapp.com/access_token") === 0) {
                browserRef.removeEventListener("exit", (event) => {});
                alert(event.url);
                browserRef.close();
                resolve();
                var responseParameters = ((event.url).split("#")[1]).split("&");
                var parsedResponse = {};
                for (var i = 0; i < responseParameters.length; i++) {
                    parsedResponse[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
                }
                if (parsedResponse["access_token"] !== undefined && parsedResponse["access_token"] !== null) {
                    resolve(parsedResponse);
                } else {
                    reject("Problem authenticating with Facebook");
                }
            }*/
        });
        browserRef.addEventListener("exit", function(event) {
            reject("The Facebook sign in flow was canceled");
        });
    });
}

}