const { RPCClient } = require('./jsonrpc')
const _ = require('lodash')

const Command = require('./command')

class Client {

  constructor(user, password, { type = 'litecoin', host = '127.0.0.1', port = 9432 } = {}) {
    this._loadCommands(type)
    this._type = type
    this._client = new RPCClient(host, port, user, password)
  }

  call (command, params, named = false) {
    return new Promise((resolve, reject) => {
      if (!this.commands[command])
        return reject(`The command '${command}' doesn't exist for '${this._type}'`)

      this.commands[command].call(params, named)
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
  }

  callRaw (command, params) {
    return this._client.call(command, params)
  }

  _loadCommands (type) {
    const self = this
    const commandObj = require(`./commands/${type}`)
    
    this.commands = {}
    Object.keys(commandObj).forEach(k => {
      const command = new Command(k, commandObj[k], this)
      
      // // TODO: Add the ability to run a command directly
      // command.run = (...params) => {
      //   return this.call(command.name, params)
      // }
      
      this.commands[k] = command
    })
  }

}

module.exports = Client