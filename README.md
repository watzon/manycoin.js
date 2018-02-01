# ManyCoin

ManyCoin is an expressive wrapper around the api's for various crypto currencies. It works by tapping into the JSON-RPC protocol that crypto currency daemons, such as litecoind, tend to use. Each currency is different, so these calls are tracked in a file in the commands subdirectory.

## Install

With NPM

`npm install manycoin`

Or with Yarn

`yarn add manycoin`

## Setup

Setup will be slightly different per coin. Most crypto currencies store configuration information in a `.coinname` directory in your home folder. For litecoin this is `~/.litecoin`. You will need to have the rpc server enabled in your `coinname.conf` file for this to work.

__Note: If you are able to successfully use the cli for your coin, eg. litecoin-cli, rpc is enabled.__

## Examples

### Create client
```js
const { Client } = require('manycoin')

const config = { type: 'litecoin', host: '0.0.0.0', port: 42070 }
const litecoin = new Client('user', 'password', config)
```

### Get balance across all accounts with minimum confirmations of 6

```js
// With positional arguments
client.call('getbalance', [ '*', 6 ])
  .then(res => console.log(res))
  .catch(err => console.error(err))

// With named arguments
client.call('getbalance', { account: '*', minconf: 6 })
  .then(res => console.log(res))
  .catch(err => console.error(err))

// By using the Command object directly
client.commands.getbalance.call([ '*', 6 ])
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

### List commands available for use

```js
const commands = Object.keys(client.commands)
```

## License
Copyright (C) 2018  Chris Watson <chris@watzon.me>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.