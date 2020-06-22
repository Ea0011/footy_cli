import {Fixture} from '../../types/fixtures'
import * as fixturesApi from '../../api/fixtures'
import {Status, ConceptResult} from '../../types/concepts'
import {GetFixtureParams} from '../../types/concepts/fixtures'
import {format} from 'date-fns'
import {validateFixtureParams} from '../../validators/fixtures'
import {StandardError} from '../../types/errors'

export const getFixtures = async (params: GetFixtureParams): ConceptResult<Fixture[], StandardError> => {
  try {
    validateFixtureParams(params)
  } catch (error) {
    return {
      status: Status.failure,
      error,
    }
  }

  try {
    const todaysFixtures = await fixturesApi.getFixtures({
      ...params,
      dateFrom: format(params.dateFrom, 'yyyy-mm-dd'),
      dateTo: format(params.dateTo, 'yyyy-mm-dd'),
    })

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

