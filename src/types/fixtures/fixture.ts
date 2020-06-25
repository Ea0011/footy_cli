import {Team} from '../teams'
import {Competition} from '../competitions'
import {Score} from '../scores'

export type Fixture = {
  id: number;
  utcDate: string;
  status: string;
  matchday: number;
  homeTeam: Team;
  awayTeam: Team;
  competition: Competition;
  score: Score;
}
