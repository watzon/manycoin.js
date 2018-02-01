const Client = require('./client')

const client = new Client('test', 'test', { type: 'litecoin', host: '0.0.0.0', port: 42070 })

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

module.exports = {
    Client
}
