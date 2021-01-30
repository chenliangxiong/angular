import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'add-payee',
    loadChildren: () => import('./add-payee/add-payee.module').then( m => m.AddPayeePageModule)
  },
  {
    path: 'edit-payee',
    loadChildren: () => import('./edit-payee/edit-payee.module').then( m => m.EditPayeePageModule)
  },
  {
    path: 'transfer',
    loadChildren: () => import('./transfer/transfer.module').then( m => m.TransferPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'card-transfer',
    loadChildren: () => import('./card-transfer/card-transfer.module').then( m => m.CardTransferPageModule)
  },
  {
    path: 'advance-transfer',
    loadChildren: () => import('./advance-transfer/advance-transfer.module').then( m => m.AdvanceTransferPageModule)
  },
  {
    path: 'slider',
    loadChildren: () => import('./slider/slider.module').then( m => m.SliderPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
