import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {CreateTicketPage} from "../create-ticket/create-ticket";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  public createTicket() {
    this.navCtrl.push(CreateTicketPage);
  }

}
