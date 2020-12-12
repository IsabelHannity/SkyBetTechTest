export interface Sport {
  heading: string;
  subHeading: string;
  url: string;
  icon: string;
  colour: string;
}

export interface ISportList {
  football: Sport;
  rugby: Sport;
  golf: Sport;
  tennis: Sport;
  cricket: Sport;
}
