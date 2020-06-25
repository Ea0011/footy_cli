import {Command, flags} from '@oclif/command'
import * as fixtures from '../../concepts/fixtures'
import {Fixture} from '../../types/fixtures'
import {cli} from 'cli-ux'
import {Status, SuccessResult, FailureResult} from '../../types/concepts'
import {startOfToday} from 'date-fns'
import {formatError} from '../../helpers/errors'
import {StandardError} from '../../types/errors'

export default class TodayFixtures extends Command {
  static description = 'display fixtures for today'

  static examples = [
    '$footy fixtures:today',
    '$footy fixtures:today --competition=BL1,PL',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    competitions: flags.string({char: 'c', description: 'competition for which to show games'}),
  }

  async run() {
    const {flags} = this.parse(TodayFixtures)
    const todayFixturesResult = await fixtures.getFixtures({
      competitions: flags.competitions,
      dateFrom: startOfToday(),
      dateTo: startOfToday(),
    })

    switch (todayFixturesResult.status) {
    case Status.success: {
      const fixtures = (todayFixturesResult as SuccessResult<Fixture[]>).result

      cli.table(fixtures, {
        homeTeam: {},
        awayTeam: {},
        competition: {},
        date: {},
        home: {get: row => row.score.fullTime.homeTeam},
        away: {get: row => row.score.fullTime.awayTeam},
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
