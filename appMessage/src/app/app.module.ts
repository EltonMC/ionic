import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { Fire } from '../providers/fire';
import { MenuPage } from '../pages/menu/menu';
import { HomePage } from '../pages/home/home';
import { FriendsPage } from '../pages/friends/friends';
import { MessageMapPage } from '../pages/message-map/message-map';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    FriendsPage,
    MessageMapPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    FriendsPage,
    MessageMapPage
  ],
  providers: [{provide: {ErrorHandler}, useClass: IonicErrorHandler}, Fire]
})

export class AppModule {}
