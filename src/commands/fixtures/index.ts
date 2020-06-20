import {Command, flags} from '@oclif/command'
import * as fixtures from '../../concepts/fixtures'
import {Fixture} from '../../types/fixtures'
import {cli} from 'cli-ux'

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
    const todayFixtures: Fixture[] = await fixtures.getFixturesForToday()

    cli.table(todayFixtures, {
      homeTeam: {},
      awayTeam: {},
      competition: {},
      date: {},
    })
  }
}
