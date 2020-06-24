import {Command, flags} from '@oclif/command'
import * as fixtures from '../../concepts/fixtures'
import {Fixture} from '../../types/fixtures'
import {cli} from 'cli-ux'
import {Status, SuccessResult, FailureResult} from '../../types/concepts'
import {addDays, startOfToday} from 'date-fns'
import {formatError} from '../../helpers/errors'
import {StandardError} from '../../types/errors'

export default class TomorrowFixtures extends Command {
  static description = 'display fixtures for tomorrow'

  static examples = [
    '$footy fixtures:tomorrow',
    '$footy fixtures:tomorrow --competition=BL1,PL',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    competitions: flags.string({char: 'c', description: 'competition for which to show games'}),
  }

  async run() {
    const {flags} = this.parse(TomorrowFixtures)
    const today = startOfToday()
    const tomorrow = addDays(today, 1)
    const todayFixturesResult = await fixtures.getFixtures({
      competitions: flags.competitions,
      dateFrom: tomorrow,
      dateTo: tomorrow,
    })

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
      const errorResult = (todayFixturesResult as FailureResult<StandardError>).error

      this.error(formatError(errorResult))
    }
    }
  }
}
