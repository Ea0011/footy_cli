import {GetFixtureParams} from '../../types/concepts/fixtures'
import {isBefore, isValid} from 'date-fns'
import {ValidationError} from '../../errors/validators/validation-error'

export const validateFixtureParams = (params: GetFixtureParams) => {
  const {dateFrom, dateTo} = params

  if (!isValid(dateFrom) || !isValid(dateTo)) {
    throw new ValidationError('dateFrom', 'params error', 'dateFrom and dateTo must be valid dates')
  }

  if ((dateFrom && !dateTo) || (dateTo && !dateFrom)) {
    throw new ValidationError('dateFrom', 'params error', 'dateFrom must be used with dateTo')
  }

  if (isBefore(dateTo, dateFrom)) {
    throw new ValidationError('dateTo', 'params error', 'dateTo cannot be earlier than dateFrom')
  }
}
