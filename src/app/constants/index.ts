import { ISportList } from '../models/sport';

export enum WSEventTypes {
  PRICE_CHANGE = 'PRICE_CHANGE',
  OUTCOME_STATUS = 'OUTCOME_STATUS',
  OUTCOME_DATA = 'OUTCOME_DATA',
  LIVE_EVENTS_DATA = 'LIVE_EVENTS_DATA',
  EVENT_DATA = 'EVENT_DATA',
  MARKET_DATA = 'MARKET_DATA',
}

export const SportsList: ISportList = {
  football: {
    heading: 'Football',
    subHeading: 'View current live football games',
    url: '/football',
    icon: 'sports_soccer',
    colour: 'green',
  },
  rugby: {
    heading: 'Rugby',
    subHeading: '6 Nations',
    url: '/rugby',
    icon: 'sports_football',
    colour: 'yellow',
  },
  golf: {
    heading: 'Golf',
    subHeading: 'Live PGA Tour',
    url: '/golf',
    icon: 'golf_course',
    colour: 'blue',
  },
  tennis: {
    heading: 'Tennis',
    subHeading: 'Live Wimbledon',
    url: '/tennis',
    icon: 'sports_tennis',
    colour: 'green',
  },
  cricket: {
    heading: 'Cricket',
    subHeading: 'Live test cricket',
    url: '/cricket',
    icon: 'sports_cricket',
    colour: 'red',
  },
};
