import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data/data.service';
import { SportsList } from '../constants';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss'],
})
export class SportComponent implements OnInit {
  selectedSport;
  liveData$ = this.dataService.liveEvents$;
  displayedColumns: string[] = [
    'name',
    'class',
    'type',
    'startTime',
    'eventStatus',
    'betOptions',
  ];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly dataService: DataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ sportName }) => {
      this.selectedSport = SportsList[sportName];
      this.dataService.sendMessage({
        type: 'getLiveEvents',
        primaryMarkets: true,
      });
    });
  }
}
