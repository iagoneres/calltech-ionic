import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule}          from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {StatusBar}          from '@ionic-native/status-bar';
import {SplashScreen}       from '@ionic-native/splash-screen';
import {IonicStorageModule} from '@ionic/storage';
import {HttpClientModule}   from "@angular/common/http";

import {HomePage}       from '../pages/home/home';
import {ExplorerPage}   from "../pages/explorer/explorer";
import {ChatPage}       from "../pages/chat/chat";
import {ProfilePage}    from "../pages/profile/profile";
import {IntroPage}      from "../pages/intro/intro";
import {LoginPage}      from "../pages/login/login";
import {SignupPage}     from "../pages/signup/signup";
import {TabsPage}       from '../pages/tabs/tabs';

import {ExplorerPageModule} from "../pages/explorer/explorer.module";
import {ChatPageModule}     from "../pages/chat/chat.module";
import {ProfilePageModule}  from "../pages/profile/profile.module";
import {IntroPageModule}    from "../pages/intro/intro.module";
import {LoginPageModule}    from "../pages/login/login.module";
import {SignupPageModule}   from "../pages/signup/signup.module";

import {UserProvider}           from '../providers/user/user';
import {AuthenticationProvider} from "../providers/authentication/authentication";
import {CreateTicketPage} from "../pages/create-ticket/create-ticket";
import {CreateTicketPageModule} from "../pages/create-ticket/create-ticket.module";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        TabsPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot(),
        ExplorerPageModule,
        ChatPageModule,
        ProfilePageModule,
        IntroPageModule,
        LoginPageModule,
        SignupPageModule,
        CreateTicketPageModule,
        HttpClientModule,
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        TabsPage,
        MyApp,
        HomePage,
        ExplorerPage,
        ChatPage,
        ProfilePage,
        IntroPage,
        LoginPage,
        SignupPage,
        CreateTicketPage,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        UserProvider,
        AuthenticationProvider,
    ]
})
export class AppModule {
}
