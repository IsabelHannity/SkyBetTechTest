import { Event } from './event';
import { Market } from './market';
import { Outcome } from './outcome';
import { WSEventTypes } from '../constants';

export { Event, Status, Competitor, Scores } from './event';
export { ISportList, Sport } from './sport';
export { Liabilities, Market } from './market';
export { Outcome, Price, Result } from './outcome';
export interface WSMessage {
  type: WSEventTypes;
  data: Market | Outcome | Event | Array<Event>;
}
