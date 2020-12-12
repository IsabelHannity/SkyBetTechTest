import { Status } from './event';

export interface Result {
  place: number;
  result: string;
  favourite: boolean;
}

export interface Price {
  den: number;
  num: number;
  decimal: number;
}

export interface Outcome {
  outcomeId: number;
  marketId: number;
  eventId: number;
  name: string;
  displayOrder: number;
  result: Result;
  linkedOutcomeId: number;
  price: Price;
  status: Status;
}
