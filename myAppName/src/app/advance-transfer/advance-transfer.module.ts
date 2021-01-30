import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvanceTransferPageRoutingModule } from './advance-transfer-routing.module';

import { AdvanceTransferPage } from './advance-transfer.page';

import { NormalTransferComponent } from './normal-transfer/normal-transfer.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvanceTransferPageRoutingModule
  ],
  declarations: [AdvanceTransferPage,NormalTransferComponent]
})
export class AdvanceTransferPageModule {}
