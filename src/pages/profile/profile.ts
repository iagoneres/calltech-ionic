import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController, LoadingController} from 'ionic-angular';

import {Storage}                from '@ionic/storage';

import {LoginPage}              from "../login/login";
import {AuthenticationProvider} from "../../providers/authentication/authentication";

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
                private storage: Storage,
                private authService: AuthenticationProvider,
                private loadingCtrl: LoadingController) {
    }


    public logOut() {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        const toast = this.toastCtrl.create({
            message: 'Não foi possível realizar o login, verifique os dados informados!',
            position: 'top',
            duration: 5000
        });

        this.authService.userAuthenticated().subscribe(
            res    => {
                console.log(res);
            },
            error => {
                console.log(error);
            }
        )
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
