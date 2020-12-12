import { Subscription } from 'rxjs';
import { DataService } from '../../services/data/data.service';
import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.scss'],
})
export class OutcomeComponent implements OnChanges {
  outcome;
  @Input() eventId;
  @Input() marketId;
  @Input() outcomeId;
  @Input() oddsType;
  subscription: Subscription;

  constructor(private readonly dataService: DataService) {}

  ngOnChanges(): void {
    if (this.outcomeId) {
      this.dataService.sendMessage({
        type: 'getOutcome',
        id: +this.outcomeId,
      });
      this.dataService.sendMessage({
        type: 'subscribe',
        keys: [`o.${this.outcomeId}`],
        clearSubscription: false,
      });
      this.subscription = this.dataService.outcome$.subscribe(
        (outcome: any) => {
          if (
            outcome.marketId === this.marketId &&
            outcome.eventId === this.eventId &&
            outcome.outcomeId === this.outcomeId
          ) {
            this.outcome = outcome;
          }
        }
      );
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.dataService.sendMessage({
      type: 'unsubscribe',
      keys: [`o.${this.outcomeId}`],
    });
  }
}
