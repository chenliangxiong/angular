import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPayeePageRoutingModule } from './edit-payee-routing.module';

import { EditPayeePage } from './edit-payee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPayeePageRoutingModule
  ],
  declarations: [EditPayeePage]
})
export class EditPayeePageModule {}
