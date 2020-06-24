import {Command, flags} from '@oclif/command'
import * as fixtures from '../../concepts/fixtures'
import {Fixture} from '../../types/fixtures'
import {cli} from 'cli-ux'
import {Status, SuccessResult, FailureResult} from '../../types/concepts'
import {parseISO, startOfToday} from 'date-fns'
import {StandardError} from '../../types/errors'
import {formatError} from '../../helpers/errors'

export default class Fixtures extends Command {
  static description = 'display fixtures that correspond to given filters'

  static examples = [
    '$footy fixtures',
    '$footy fixtures --competition=BL1,PL',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    competitions: flags.string({char: 'c', description: 'competition for which to show games'}),
    dateFrom: flags.string({description: 'start date'}),
    dateTo: flags.string({description: 'end date'}),
  }

  async run() {
    const {flags} = this.parse(Fixtures)
    const dateFrom = flags.dateFrom ? parseISO(flags.dateFrom) : startOfToday()
    const dateTo = flags.dateTo ? parseISO(flags.dateTo) : startOfToday()
    const todayFixturesResult = await fixtures.getFixtures({
      competitions: flags.competitions,
      dateFrom,
      dateTo,
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
