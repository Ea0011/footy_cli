footy
=

Command Line Interface for football news

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/y.svg)](https://npmjs.org/package/y)
[![Downloads/week](https://img.shields.io/npm/dw/y.svg)](https://npmjs.org/package/y)
[![License](https://img.shields.io/npm/l/y.svg)](https://github.com/[object Object]/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g footy_cli
$ footy COMMAND
running command...
$ footy (-v|--version|version)
footy/0.0.1 darwin-x64 node-v12.11.1
$ footy --help [COMMAND]
USAGE
  $ footy COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`footy help [COMMAND]`](#footy-help-command)
* [`footy fixtures [COMPETITIONS, DATEFROM, DATETO]`](#footy-help-command)

## `footy help [COMMAND]`

display help for footy

```
USAGE
  $ footy help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src/commands/help.ts)_

## `footy fixtures [COMPETITIONS, DATEFROM, DATETO]`

Display football fixtures for competitions withing given time range. Special commands exist for today and tomorrow filtering.

```
USAGE
  $ footy fixtures
  $ footy fixtures:today
  $ footy fixtures:tomorrow

OPTIONS
  -c, --competitions competitions to show fixtures for
  -h, --help       show CLI help
  --dateFrom=yyyy-MM-dd  start date
  --dateTo=yyyy-MM-d  end date

EXAMPLE
  $ footy fixtures --competitions=PL, BL1 --dateFrom=1990-01-01 --dateTo=1990-01-05
  Hometeam                  Awayteam                   Competition      Date                     
  Fulham FC                 Brentford FC               Championship     2020-06-20T11:30:00.000Z 
```

_See code: [src/commands/hello.ts](https://github.com/Ea0011/footy_cli/blob/v0.0.1/src/commands/hello.ts)_
<!-- commandsstop -->
