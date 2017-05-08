import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { UserSelectPage } from '../pages/user-select/user-select';
import { UserClientPage } from '../pages/user-client/user-client';
import { UserProPage } from '../pages/user-pro/user-pro';
import { DadosProPage } from '../pages/dados-pro/dados-pro';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    UserSelectPage,
    UserClientPage,
    UserProPage,
    DadosProPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    UserSelectPage,
    UserClientPage,
    UserProPage,
    DadosProPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
