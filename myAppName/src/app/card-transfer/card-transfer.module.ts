import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardTransferPageRoutingModule } from './card-transfer-routing.module';

import { CardTransferPage } from './card-transfer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardTransferPageRoutingModule
  ],
  declarations: [CardTransferPage]
})
export class CardTransferPageModule {}
