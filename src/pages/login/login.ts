import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, ToastController} from 'ionic-angular';

import {SignupPage}             from "../signup/signup";
import {TabsPage}               from "../tabs/tabs";
import {AuthenticationProvider} from "../../providers/authentication/authentication";

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
    providers: [AuthenticationProvider]

})

export class LoginPage {

    // public backgroundImage: string  = 'assets/imgs/background/bluetexture.jpg';
    public logoImage: string        = 'assets/imgs/logo/logo.png';
    public authParams               = {
        "grant_type": "password",
        "client_id": "2",
        "client_secret": "35LbweIRyl1Z1ljfWifDa99pnD32UhlOxdtk1OU0",
        "username": "",
        "password": "",
        "scope": "*"
    };

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private authService: AuthenticationProvider,
                private loadingCtrl: LoadingController,
                private toastCtrl: ToastController) {
    }



    public login() {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        const toast = this.toastCtrl.create({
            message: 'Não foi possível realizar o login, verifique os dados informados!',
            position: 'top',
            duration: 5000
        });

        loading.present();

        this.authService.authenticate(this.authParams).subscribe(
            res    => {
                loading.dismissAll();
                this.authService.setAuthorization(res.access_token);
                this.navCtrl.setRoot(TabsPage);
            },
            error => {
                loading.dismissAll();
                toast.present();
            }
        );
    }

    public goToSignup() {
        this.navCtrl.push(SignupPage);
    }

    public goToResetPassword() {
        // this.navCtrl.push(ResetPasswordPage);
    }

    ionViewDidLoad() {

    }

}
