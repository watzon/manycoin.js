const Client = require('./client')

const client = new Client('test', 'test', { type: 'garlicoin', host: '0.0.0.0', port: 42070 })

// With positional arguments
client.call('getwork')
  .then(res => console.log(res))
  .catch(err => console.error(err))

module.exports = {
    Client
}
