import { Component }        from '@angular/core';
import { Camera }           from '@ionic-native/camera';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class ProfilePage {
  errorMessage: any;
  placeholderPicture = 'https://api.adorable.io/avatar/200/bob';

  enableNotifications = true;
  language: any;
  currency: any;
  paymentMethod: any;

  languages = ['English', 'Portuguese', 'French'];
  paymentMethods = ['Paypal', 'Credit Card'];
  currencies = ['USD', 'BRL', 'EUR'];

  user = {
      name: 'Marty Mcfly',
      imageUrl: 'assets/imgs/marty-avatar.png'
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public alertCtrl: AlertController) {
  }

  toggleNotifications() {
      if (this.enableNotifications) {
          this.toastCtrl.create({
              message: 'Notifications enabled',
              duration: 3000
          });
      } else {
              this.toastCtrl.create({
                  message: 'Notifications enabled',
                  duration: 3000
              });
      }
  }

  ionViewDidLoad() {

  }

}
