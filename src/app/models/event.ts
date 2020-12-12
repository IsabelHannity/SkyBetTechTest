export interface Scores {
  home: number;
  away: number;
}

export interface Competitor {
  name: string;
  position: string;
}

export interface Status {
  active: boolean;
  cashoutable: boolean;
  displayable: boolean;
  finished?: boolean;
  live: boolean;
  noExtraTime?: boolean;
  requestabet?: boolean;
  result?: string;
  resulted: boolean;
  started?: boolean;
  suspended: boolean;
}

export interface Event {
  eventId: number;
  name: string;
  displayOrder: number;
  sort: string;
  linkedEventId: number;
  classId: number;
  className: string;
  typeId: number;
  typeName: string;
  linkedEventTypeId: number;
  linkedEventTypeName: string;
  startTime: Date;
  scores: Scores;
  competitors: Competitor[];
  status: Status;
  boostCount: number;
  superBoostCount: number;
  markets: number[];
}
