import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { EventComponent } from './event.component';
import { EventRoutingModule } from './event-routing.module';
import { MarketComponent } from './market/market.component';
import { OutcomeComponent } from './outcome/outcome.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [EventComponent, MarketComponent, OutcomeComponent],
  imports: [EventRoutingModule, FormsModule, SharedModule],
})
export class EventsModule {}
