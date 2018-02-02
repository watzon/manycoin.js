const { RPCClient } = require('./jsonrpc')

const Command = require('./command')

class Client {
  constructor (user, password, { type = 'litecoin', host = '127.0.0.1', port = 9432 } = {}) {
    this._loadCommands(type)
    this._type = type
    this._client = new RPCClient(host, port, user, password)
  }

  call (command, args, { positional = true, rejectInvalid = true } = {}) {
    return new Promise((resolve, reject) => {
      if (!this.commands[command]) {
        return reject(new Error(`The command '${command}' doesn't exist for the adapter '${this._type}'`))
      }

      this.commands[command].call(args, { positional, rejectInvalid })
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
  }

  callRaw (command, args) {
    return this._client.call(command, args)
  }

  _loadCommands (type) {
    const commandObj = require(`./commands/${type}`)

    this.commands = {}
    Object.keys(commandObj).forEach(k => {
      const command = new Command(k, commandObj[k], this)
      this.commands[k] = command
    })
  }
}

module.exports = Client
