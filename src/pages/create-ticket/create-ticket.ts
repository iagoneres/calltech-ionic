import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthenticationProvider} from "../../providers/authentication/authentication";

/**
 * Generated class for the CreateTicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-ticket',
  templateUrl: 'create-ticket.html',
})
export class CreateTicketPage {

    public params = {
        "title": "",
        "description": "",
        "category": "",
        "level": "",
    };

    token: string;

  constructor(public navCtrl: NavController,
              private authService: AuthenticationProvider,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
      this.authService.getAuthorization()
          .then(
              value => {
                  this.token = value;
              })
          .then(() => {
                  this.authService.userAuthenticated(this.token);
              }
          );
  }

  public createTicket() {

  }

  public cancel() {
      this.navCtrl.pop();
  }

}
