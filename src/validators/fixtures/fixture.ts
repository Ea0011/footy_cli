import {GetFixtureParams} from '../../types/concepts/fixtures'
import {isBefore, isValid} from 'date-fns'
import {ValidationError} from '../../errors/validators'

export const validateFixtureParams = (params: GetFixtureParams) => {
  const {dateFrom, dateTo} = params

  if (!isValid(dateFrom) || !isValid(dateTo)) {
    throw new ValidationError({
      key: 'dateFrom',
      error: 'params error',
      message: 'dateFrom and dateTo must be valid dates',
    })
  }

  if ((dateFrom && !dateTo) || (dateTo && !dateFrom)) {
    throw new ValidationError({
      key: 'dateFrom',
      error: 'params error',
      message: 'dateFrom must be used with dateTo',
    })
  }

  if (isBefore(dateTo, dateFrom)) {
    throw new ValidationError({
      key: 'dateTo',
      error: 'params error',
      message: 'dateTo cannot be earlier than dateFrom',
    })
  }
}
