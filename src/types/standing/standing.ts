import {Team} from '../teams'
import {Competition} from '../competitions'

export type Standing = {
  position: number;
  team: Team;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  form: string;
}

export type Standings = {
  competition: Competition;
  table: [Standing];
}
