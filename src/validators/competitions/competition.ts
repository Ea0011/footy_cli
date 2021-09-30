import {GetStandingsParams} from '../../types/concepts/competitions'
import {ValidationError} from '../../errors/validators'

export const validateStandingsParams = (params: GetStandingsParams)  => {
  if (!params.competitionId) {
    throw new ValidationError({key: 'competition', error: 'cannot be empty', message: 'competiotion should be present'})
  }
}
