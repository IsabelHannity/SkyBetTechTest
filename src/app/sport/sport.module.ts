import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { SportComponent } from './sport.component';
import { SportRoutingModule } from './sport-routing.module';

@NgModule({
  declarations: [SportComponent],
  imports: [SharedModule, SportRoutingModule],
})
export class SportModule {}
