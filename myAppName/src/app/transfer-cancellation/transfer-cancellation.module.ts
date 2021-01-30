import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferCancellationPageRoutingModule } from './transfer-cancellation-routing.module';

import { TransferCancellationPage } from './transfer-cancellation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferCancellationPageRoutingModule
  ],
  declarations: [TransferCancellationPage]
})
export class TransferCancellationPageModule {}
