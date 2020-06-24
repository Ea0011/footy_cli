import {StandardError} from '../../types/errors';

export const formatError = (standardError: StandardError) => {
  const {key, error, message} = standardError

  return `
    {
      key: ${key}
      error: ${error}
      message: ${message}
    }
  `
}
