import {Command, flags} from '@oclif/command'
import * as config from '../../concepts/config'
import {Status, SuccessResult, FailureResult} from '../../types/concepts'
import {StandardError} from '../../types/errors'

export default class Api extends Command {
  static description = 'set or change api key'

  static examples = [
    '$footy config:api --key=SOME_API_KEY',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    key: flags.string({description: 'Api key to set'}),
  }

  async run() {
    const {flags} = this.parse(Api)
    const setApiKeyResult = await config.setApiKey(flags.key!)

    switch (setApiKeyResult.status) {
    case Status.success: {
      const message = (setApiKeyResult as SuccessResult<string>).result
      this.log(message)
      break
    }
    case Status.failure: {
      const errorResult = (setApiKeyResult as FailureResult<StandardError>).error

      this.error(errorResult.error)
    }
    }
  }
}
