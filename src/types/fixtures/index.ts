import {Team} from '../teams'
import {Competition} from '../competitions'

export type Fixture = {
  id: number;
  utcDate: string;
  status: string;
  matchday: number;
  homeTeam: Team;
  awayTeam: Team;
  competition: Competition;
}
