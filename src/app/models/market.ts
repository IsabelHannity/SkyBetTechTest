import { Status } from './event';

export interface Liabilities {
  livePriceLimit: number;
}

export interface Market {
  marketId: number;
  eventId: number;
  name: string;
  displayOrder: number;
  type: string;
  status: Status;
  liabilities: Liabilities;
  spAvail: boolean;
  outcomes: number[];
}
