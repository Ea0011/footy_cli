import {Command, flags} from '@oclif/command'
import {setApiKey} from '../../concepts/config'
import {Status} from '../../types/concepts'
import {cli} from 'cli-ux'

export default class Config extends Command {
  static description = 'set api key'

  static examples = [
    '$footy config',
    '$footy config --apiKey=myKey',
  ]

  static flags = {
    apiKey: flags.string({char: 'k', description: 'Value to use for api key', required: true}),
  }

  async run() {
    const {flags} = this.parse(Config)
    const setApiKeyResult = await setApiKey(flags.apiKey)

    switch (setApiKeyResult.status) {
    case Status.success: {
      cli.info(`Api key set to ${flags.apiKey}`)
    }
    }
  }
}
