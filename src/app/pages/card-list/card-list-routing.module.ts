import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDetailComponent } from './card-detail.component';

export const cardDetailRoute: Routes = [
  {
      path: '',
      component: CardDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(cardDetailRoute)],
  exports: [RouterModule]
})
export class CardDetailRoutingModule { }
