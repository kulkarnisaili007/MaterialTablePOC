export interface Launchpads {
  launchpads: Launchpad[];

}
export interface Launchpad {

  name: string;
  full_name: string;
  status: string;
  type: string;
  locality: string;
  region: string;
  wikipedia: string;
  details: string;
  launches:string[];

}
