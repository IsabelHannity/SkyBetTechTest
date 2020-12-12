import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SportsListComponent } from './sports-list/sports-list.component';

const routes: Routes = [
  {
    path: ':sportName',
    loadChildren: () =>
      import('./sport/sport.module').then(({ SportModule }) => SportModule),
  },
  {
    path: '',
    component: SportsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
