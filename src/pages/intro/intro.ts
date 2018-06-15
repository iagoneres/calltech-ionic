import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {LoginPage}  from "../login/login";
import {TabsPage}   from "../tabs/tabs";

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams) {
  }

  public slides: Array<any> = [
      {
          title: "Bem-vindo ao CallTech!",
          description: "Com <b>CallTech</b> você pode criar tickets para as certas possam resolver seus problemas.",
          image: "assets/imgs/ica-slidebox-img-1.png",
      },
      {
          title: "Precisando de uma renda extra?",
          description: "<b>CallTech</b> também pode ser uma forma de ganhar uma renda extra e auxiliar na resolução de problemas de outras pessoas",
          image: "assets/imgs/ica-slidebox-img-2.png",
      },
      {
          title: "O que é o CallTech?",
          description: "O <b>CallTech</b> é a plataforma mais moderna para encontrar pessoas que podem auxiliar você ou onde você pode auxiliar outras pessoas e ainda ganhar uma renda extra.",
          image: "assets/imgs/ica-slidebox-img-3.png",
      },
  ];

  public goToTabsPage(): void {
    this.navCtrl.push(LoginPage);
  }

  ionViewDidLoad() {

  }

}
