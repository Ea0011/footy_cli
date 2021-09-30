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
$ y COMMAND
running command...
$ y (-v|--version|version)
footy_cli/0.0.1 darwin-x64 node-v10.15.0
$ y --help [COMMAND]
USAGE
  $ y COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`y competitions`](#y-competitions)
* [`y fixtures`](#y-fixtures)
* [`y fixtures:today`](#y-fixturestoday)
* [`y fixtures:tomorrow`](#y-fixturestomorrow)
* [`y hello [FILE]`](#y-hello-file)
* [`y help [COMMAND]`](#y-help-command)

## `y competitions`

display fixtures that correspond to given filters

```
USAGE
  $ y competitions

OPTIONS
  -c, --competition=competition  competition for which to show standings
  -h, --help                     show CLI help

EXAMPLES
  $footy fixtures
  $footy fixtures --competition=BL1,PL
```

_See code: [src/commands/competitions/index.ts](https://github.com/Ea0011/footy_cli/blob/v0.0.1/src/commands/competitions/index.ts)_

## `y fixtures`

display fixtures that correspond to given filters

```
USAGE
  $ y fixtures

OPTIONS
  -c, --competitions=competitions  competition for which to show games
  -h, --help                       show CLI help
  --dateFrom=dateFrom              start date
  --dateTo=dateTo                  end date

EXAMPLES
  $footy fixtures
  $footy fixtures --competition=BL1,PL
```

_See code: [src/commands/fixtures/index.ts](https://github.com/Ea0011/footy_cli/blob/v0.0.1/src/commands/fixtures/index.ts)_

## `y fixtures:today`

display fixtures for today

```
USAGE
  $ y fixtures:today

OPTIONS
  -c, --competitions=competitions  competition for which to show games
  -h, --help                       show CLI help

EXAMPLES
  $footy fixtures:today
  $footy fixtures:today --competition=BL1,PL
```

_See code: [src/commands/fixtures/today.ts](https://github.com/Ea0011/footy_cli/blob/v0.0.1/src/commands/fixtures/today.ts)_

## `y fixtures:tomorrow`

display fixtures for tomorrow

```
USAGE
  $ y fixtures:tomorrow

OPTIONS
  -c, --competitions=competitions  competition for which to show games
  -h, --help                       show CLI help

EXAMPLES
  $footy fixtures:tomorrow
  $footy fixtures:tomorrow --competition=BL1,PL
```

_See code: [src/commands/fixtures/tomorrow.ts](https://github.com/Ea0011/footy_cli/blob/v0.0.1/src/commands/fixtures/tomorrow.ts)_

## `y hello [FILE]`

describe the command here

```
USAGE
  $ y hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ y hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/Ea0011/footy_cli/blob/v0.0.1/src/commands/hello.ts)_

## `y help [COMMAND]`

display help for y

```
USAGE
  $ y help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src/commands/help.ts)_
<!-- commandsstop -->
