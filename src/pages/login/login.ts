import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SignupPage} from "../signup/signup";
import {TabsPage} from "../tabs/tabs";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public backgroundImage = 'assets/imgs/background/bluetexture.jpg';
  public logoImage       = 'assets/imgs/logo/angular.png';

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

    login() {
      this.navCtrl.setRoot(TabsPage);
    }

    goToSignup() {
        this.navCtrl.push(SignupPage);
    }

    goToResetPassword() {
        // this.navCtrl.push(ResetPasswordPage);
    }

  ionViewDidLoad() {

  }

}
