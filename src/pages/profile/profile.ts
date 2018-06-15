import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController, LoadingController, App} from 'ionic-angular';

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

    token: string;

    constructor(public app: App,
                public navCtrl: NavController,
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

        const toastSuccess = this.toastCtrl.create({
            message: 'Usuário deslogado com sucesso!',
            position: 'top',
            duration: 5000
        });

        const toastError = this.toastCtrl.create({
            message: 'Não foi possível realizar o logoff, verifique sua rede',
            position: 'top',
            duration: 5000
        });

        loading.present();

        this.authService.revokeToken(this.token).subscribe(
            res => {
                loading.dismissAll();
                this.app.getRootNav().setRoot(LoginPage);
                toastSuccess.present();
            },
            error => {
                loading.dismissAll();
                toastError.present();
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
}
