import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListTicketsPage } from './list-tickets';

@NgModule({
  declarations: [
    ListTicketsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListTicketsPage),
  ],
})
export class ListTicketsPageModule {}
