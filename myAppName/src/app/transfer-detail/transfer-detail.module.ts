import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferDetailPageRoutingModule } from './transfer-detail-routing.module';

import { TransferDetailPage } from './transfer-detail.page';

import { NormalTransferComponent } from '../advance-transfer/normal-transfer/normal-transfer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferDetailPageRoutingModule
  ],
  declarations: [TransferDetailPage,NormalTransferComponent]
})
export class TransferDetailPageModule {}
