import {Fixture} from '../../types/fixtures'
import * as fixturesApi from '../../api/fixtures'
import {Status, ConceptResult} from '../../types/concepts'
import {ApiError} from '../../types/api'

export const getFixturesForToday = async (): ConceptResult<Fixture[], ApiError> => {
  try {
    const todaysFixtures = await fixturesApi.getTodaysFixtures()

    const result = todaysFixtures.matches.map((match: Fixture) => ({
      homeTeam: match.homeTeam.name,
      awayTeam: match.awayTeam.name,
      date: new Date(match.utcDate),
      competition: match.competition.name,
    }))

    return {
      status: Status.success,
      result,
    }
  } catch (error) {
    return {
      status: Status.failure,
      error,
    }
  }
}

