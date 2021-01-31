import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoreDetailPageRoutingModule } from './more-detail-routing.module';

import { MoreDetailPage } from './more-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoreDetailPageRoutingModule
  ],
  declarations: [MoreDetailPage]
})
export class MoreDetailPageModule {}
