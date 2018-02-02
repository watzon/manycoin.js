const { DataType } = require('./types')
const _ = require('lodash')

class Command {
  constructor (name, { params = {}, returns = null } = {}, client) {
    this.name = name
    this.params = params
    this.returns = returns
    this._client = client
  }

  get numParams () {
    return Object.keys(this.params).length
  }

  call (args = [], { positional = true, rejectInvalid = true } = {}) {
    // Normalize the object or array into an object of Key => Param
    args = this._normalize(args)

    return new Promise((resolve, reject) => {
      let validations = Promise.all(Object.keys(args).map(k => args[k].valid))
      validations.catch(err => {
        if (rejectInvalid) {
          return reject(err)
        }

        console.error(err)
      })

      // Turn an object into an array if positional is true
      if (positional) args = Object.keys(args).map(k => args[k].value)

      this._client.callRaw(this.name, args)
                .then(res => resolve(res))
                .catch(err => reject(err))
    })
  }

  // Takes a raw params object or array and turns it into a `Param`
  _normalize (args) {
    if (_.isArray(args)) {
      let keys = Object.keys(this.params)
      const pairs = _.zip(keys, args)

      const params = pairs.reduce((acc, cur) => {
        const options = this.params[cur[0]]
        acc[cur[0]] = new Param(cur[1], cur[0], options)
        return acc
      }, {})

      return params
    } else if (_.isPlainObject(args)) {
      return args
    } else {
      throw new Error(`Expected Array or Object, got ${args.constructor}.`)
    }
  }

  _namedToPositional (paramObj) {
    return Object.keys(paramObj).map(k => paramObj[k])
  }

  _countParams (params) {
    if (_.isArray(params)) {
      return params.length
    } else {
      return Object.keys(params).length
    }
  }
}

class Param {
  constructor (value, name, options) {
    this.value = value
    this.name = name
    if (options instanceof DataType) {
      this.type = options
      this.required = false
      this.default = null
    } else {
      if (!options.type) {
        throw new Error(`The 'type' parameter is required for '${options.name}'`)
      }

      this.type = options.type
      this.required = options.required || false
      this.default = options.default || null
    }
  }

  get valid () {
    return this.validate()
  }

  validate () {
    return new Promise((resolve, reject) => {
      const typeValid = this.type.validator(this.value)
      const required = this.required

      if (_.isNil(this.value) && required) {
        return reject(new Error(`Expected to receive value for required argument '${this.name}', instead got ${this.value}.`))
      }

      if (!_.isNil(this.value) && !typeValid) {
        return reject(new Error(`Invalid argument type for '${this.name}'. Expected '${this.type.toString()}', got '${typeof this.value}'.`))
      }

      resolve()
    })
  }
}

module.exports = Command
