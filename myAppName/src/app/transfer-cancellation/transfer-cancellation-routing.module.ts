import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferCancellationPage } from './transfer-cancellation.page';

const routes: Routes = [
  {
    path: '',
    component: TransferCancellationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferCancellationPageRoutingModule {}
