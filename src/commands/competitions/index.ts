import {Command, flags} from '@oclif/command'
import {cli} from 'cli-ux'
import {Status} from '../../types/concepts'
import * as competitions from '../../concepts/competitions'
import {formatError} from '../../helpers/errors'

export default class Competitions extends Command {
  static description = 'display fixtures that correspond to given filters'

  static examples = [
    '$footy fixtures',
    '$footy fixtures --competition=BL1,PL',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    competition: flags.string({char: 'c', description: 'competition for which to show standings'}),
  }

  async run() {
    const {flags} = this.parse(Competitions)

    const standings = await competitions.getStandings({competitionId: flags.competition})

    switch (standings.status) {
    case Status.success: {
      cli.table(standings.result.table, {
        position: {},
        team: {get: row => row.team.name},
        points: {},
        won: {},
        draw: {},
        lost: {},
        goalsFor: {},
        goalsAgainst: {},
        goalDifference: {},
        form: {},
      })
      break
    }
    case Status.failure: {
      this.error(formatError(standings.error))
    }
    }
  }
}
