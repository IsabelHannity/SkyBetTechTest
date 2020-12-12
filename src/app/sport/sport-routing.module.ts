import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SportComponent } from './sport.component';

const routes: Routes = [
  {
    path: '',
    component: SportComponent,
  },
  {
    path: ':eventId',
    loadChildren: () =>
      import('../event/event.module').then(({ EventsModule }) => EventsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportRoutingModule {}
