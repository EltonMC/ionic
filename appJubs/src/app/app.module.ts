import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { UserLoginPage } from '../pages/user-login/user-login';
import { UserChoicePage } from '../pages/user-choice/user-choice';
import { UserClientPage } from '../pages/user-client/user-client';
import { UserProPage } from '../pages/user-pro/user-pro';
import { AppjubsUsers } from '../providers/appjubs-users';
import { UserClientPage } from '../pages/user-client/user-client';
import { UserProPage } from '../pages/user-pro/user-pro';

@NgModule({
  declarations: [
    MyApp,
    UserLoginPage,
    UserChoicePage,
    UserClientPage,
    UserProPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UserLoginPage,
    UserChoicePage,
    UserClientPage,
    UserProPage
  ],
  providers: [AppjubsUsers]
})
export class AppModule {}
