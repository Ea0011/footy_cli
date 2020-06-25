import * as nconf from 'nconf'
import {Status, ConceptResult} from '../../types/concepts'
import {StandardError} from '../../errors/standard-error'

export const setApiKey = (apiKey: string): ConceptResult<string, StandardError> =>
  new Promise((res, rej) => {
    nconf.use('file', {file: 'src/config/football_data/football-api.config.json'})
    nconf.load()
    nconf.set('apiKey', apiKey)

    nconf.save((error: Error) => {
      if (error) {
        rej(error)
      }

      res({
        status: Status.success,
        result: 'success',
      })
    })
  })
