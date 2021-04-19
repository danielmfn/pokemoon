import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'card-list',
    loadChildren: () => import('./pages/card-list/card-list.module').then(m => m.CardListModule)
  },
  {
    path: 'card-detail',
    loadChildren: () => import('./pages/card-detail/card-detail.module').then(m => m.CardDetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
