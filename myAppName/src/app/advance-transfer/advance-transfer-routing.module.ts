import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvanceTransferPage } from './advance-transfer.page';

const routes: Routes = [
  {
    path: '',
    component: AdvanceTransferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvanceTransferPageRoutingModule {}
