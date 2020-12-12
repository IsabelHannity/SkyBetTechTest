import { Sport } from './../../../models';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { SportsList } from './../../../constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  /* selectedSport: Sport;
  subscription: Subscription;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(({ sportName }) => {
      debugger;
      this.selectedSport = SportsList[sportName];
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  } */
}
