import { NgModule, ErrorHandler }                   from '@angular/core';
import { BrowserModule }                            from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp }                                    from './app.component';

import { HomePage }     from '../pages/home/home';
import { ExplorerPage }  from "../pages/explorer/explorer";
import { ChatPage }      from "../pages/chat/chat";
import { ProfilePage }   from "../pages/profile/profile";
import { IntroPage }     from "../pages/intro/intro";
import { TabsPage }     from '../pages/tabs/tabs';

import { StatusBar }          from '@ionic-native/status-bar';
import { SplashScreen }       from '@ionic-native/splash-screen';
import { ExplorerPageModule } from "../pages/explorer/explorer.module";
import { ChatPageModule }     from "../pages/chat/chat.module";
import { ProfilePageModule }  from "../pages/profile/profile.module";
import { IntroPageModule }    from "../pages/intro/intro.module";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ExplorerPageModule,
    ChatPageModule,
    ProfilePageModule,
    IntroPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ExplorerPage,
    ChatPage,
    ProfilePage,
    IntroPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
