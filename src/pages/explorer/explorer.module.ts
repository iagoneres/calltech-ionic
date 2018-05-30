import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExplorerPage } from './explorer';

@NgModule({
  declarations: [
    ExplorerPage,
  ],
  imports: [
    IonicPageModule.forChild(ExplorerPage),
  ],
})
export class ExplorerPageModule {}
