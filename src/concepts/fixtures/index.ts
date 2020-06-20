import {Fixture} from '../../types/fixtures'
import * as fixturesApi from '../../api/fixtures'

export const getFixturesForToday = async (): Promise<Fixture[]> => {
  const todaysFixtures = await fixturesApi.getTodaysFixtures()

  return todaysFixtures.matches.map((match: Fixture) => ({
    homeTeam: match.homeTeam.name,
    awayTeam: match.awayTeam.name,
    date: new Date(match.utcDate),
    competition: match.competition.name,
  }))
}

