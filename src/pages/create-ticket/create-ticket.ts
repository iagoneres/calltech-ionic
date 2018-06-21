import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {AuthenticationProvider} from "../../providers/authentication/authentication";
import {TicketsProvider} from "../../providers/tickets/tickets";

@IonicPage()
@Component({
    selector: 'page-create-ticket',
    templateUrl: 'create-ticket.html',
})
export class CreateTicketPage {

    public params = {
        "user_id": 1,
        "title": "",
        "description": "",
        "category": "",
        "level": "",
    };

    token: string;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private authService: AuthenticationProvider,
                private loadingCtrl: LoadingController,
                private toastCtrl: ToastController,
                private ticketsService: TicketsProvider) {
    }

    ionViewDidLoad() {
        this.authService.getAuthorization()
            .then(
                value => {
                    this.token = value;
                    console.log(this.token);
                })
            .then(() => {
                    this.authService.userAuthenticated(this.token);
                }
            );
    }

    public createTicket() {
        let loading = this.loadingCtrl.create({
            content: 'Por favor aguarde...'
        });

        const toastError = this.toastCtrl.create({
            message: 'Não foi possível criar o ticket, verifique os dados informados!',
            position: 'top',
            duration: 5000
        });

        const toastSuccess = this.toastCtrl.create({
            message: 'Ticket criado com sucesso',
            position: 'top',
            duration: 3000
        });
        console.log(this.params);
        this.ticketsService.createTicket(this.params, this.token).subscribe(
            res => {
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

}
