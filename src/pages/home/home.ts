import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {CreateTicketPage} from "../create-ticket/create-ticket";
import {ListTicketsPage} from "../list-tickets/list-tickets";

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

  public listTickets() {
    this.navCtrl.push(ListTicketsPage);
  }

}
