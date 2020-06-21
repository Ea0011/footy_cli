import {Command, flags} from '@oclif/command'
import * as fixtures from '../../concepts/fixtures'
import {Fixture} from '../../types/fixtures'
import {cli} from 'cli-ux'
import {Status, SuccessResult, FailureResult} from '../../types/concepts'
import {ApiError} from '../../types/api'

export default class Fixtures extends Command {
  static description = 'display fixtures for today'

  static examples = [
    '$footy fixtures',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    competition: flags.string({char: 'c', description: 'competition for which to show games'}),
  }

  async run() {
    const todayFixturesResult = await fixtures.getFixturesForToday()

    switch (todayFixturesResult.status) {
    case Status.success: {
      const fixtures = (todayFixturesResult as SuccessResult<Fixture[]>).result

      cli.table(fixtures, {
        homeTeam: {},
        awayTeam: {},
        competition: {},
        date: {},
      })
      break
    }
    case Status.failure: {
      const errorResult = (todayFixturesResult as FailureResult<ApiError>).error

      this.error(errorResult.error)
    }
    }
  }
}
