import { Subscription } from 'rxjs';
import { DataService } from '../../services/data/data.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss'],
})
export class MarketComponent implements OnChanges {
  market;
  subscription: Subscription;

  @Input() eventId: number;
  @Input() marketId: number;
  @Input() oddsType: string;

  constructor(private readonly dataService: DataService) {}

  ngOnChanges(): void {
    if (this.marketId) {
      this.dataService.sendMessage({
        type: 'getMarket',
        id: +this.marketId,
      });
      this.dataService.sendMessage({
        type: 'subscribe',
        keys: [`m.${this.eventId}`],
        clearSubscription: false,
      });
      this.subscription = this.dataService.market$.subscribe((market: any) => {
        if (
          market.marketId === this.marketId &&
          market.eventId === this.eventId
        ) {
          this.market = market;
        }
      });
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.dataService.sendMessage({
      type: 'unsubscribe',
      keys: [`m.${this.eventId}`],
    });
  }
}
