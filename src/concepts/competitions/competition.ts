import * as competitionsApi from '../../api/competitions'
import {ConceptResult, Status} from '../../types/concepts'
import {Standings} from '../../types/standing'
import {StandardError} from '../../errors/standard-error'
import {GetStandingsParams} from '../../types/concepts/competitions'
import {validateStandingsParams} from '../../validators/competitions/competition'

export const getStandings = async (params: GetStandingsParams): ConceptResult<Standings, StandardError> => {
  try {
    validateStandingsParams(params)
  } catch (error) {
    return {
      status: Status.failure,
      error: error,
    }
  }

  try {
    const standingsResult = await competitionsApi.getStandings(params)

    const standings: Standings = {
      competition: standingsResult.competition,
      table: standingsResult.standings[0].table,
    }

    return {
      status: Status.success,
      result: standings,
    }
  } catch (error) {
    return {
      status: Status.failure,
      error: error.message,
    }
  }
}
