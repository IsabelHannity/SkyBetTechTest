import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataService } from '../services/data/data.service';
import { Sport } from './../models';
import { SportsList } from './../constants/index';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  subscription: Subscription;
  event$ = this.dataService.event$;
  selectedSport: Sport;
  eventId: string;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly dataService: DataService
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      ({ eventId, sportName }) => {
        this.selectedSport = SportsList[sportName];
        this.eventId = eventId;
        this.dataService.sendMessage({
          type: 'getEvent',
          id: +eventId,
        });
        this.dataService.sendMessage({
          type: 'subscribe',
          keys: [`e.${eventId}`],
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.dataService.sendMessage({
      type: 'unsubscribe',
      keys: [`e.${this.eventId}`],
    });
  }
}
