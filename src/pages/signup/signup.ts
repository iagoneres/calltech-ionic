import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";

@IonicPage()
@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html',
})

export class SignupPage {

    public params = {
        "name": "",
        "cpf_cnpj": "",
        "email": "",
        "birthdate": "",
        "password": "",
        "gender": "",
        "type": ""
    };

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public userService: UserProvider,
                private loadingCtrl: LoadingController,
                private toastCtrl: ToastController) {
    }

    public createUser() {
        let loading = this.loadingCtrl.create({
            content: 'Por favor aguarde...'
        });

        const toastError = this.toastCtrl.create({
            message: 'Não foi possível criar o usuário, verifique os dados informados!',
            position: 'top',
            duration: 5000
        });

        const toastSuccess = this.toastCtrl.create({
            message: 'Usuário criado com sucesso',
            position: 'top',
            duration: 3000
        });

        this.userService.createUser(this.params).subscribe(
            res    => {
                loading.dismissAll();
                this.navCtrl.pop();
                toastSuccess.present();

            },
            error => {
                loading.dismissAll();
                toastError.present();
            }
        );
    }

    public cancel() {
        this.navCtrl.pop();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SignupPage');
    }

}
