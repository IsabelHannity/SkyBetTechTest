import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Sport } from '../models';
import { SportsList } from '../constants';

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrls: ['./sports-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SportsListComponent {
  sports: Array<Sport> = Object.keys(SportsList).map(
    (sport: string) => SportsList[sport]
  );
}
