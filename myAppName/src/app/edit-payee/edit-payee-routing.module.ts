import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPayeePage } from './edit-payee.page';

const routes: Routes = [
  {
    path: '',
    component: EditPayeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPayeePageRoutingModule {}
