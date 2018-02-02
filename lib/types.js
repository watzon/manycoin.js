const _ = require('lodash')

function NOOP () {
  return true
}

class DataType {
  constructor ({name, validator}) {
    this.name = name
    this.validator = validator || NOOP
  }

  toString () {
    return this.name
  }
}

const Primitives = {
  STRING: new DataType({
    name: 'string',
    validator: (s) => _.isString(s)
  }),
  ARRAY: new DataType({
    name: 'array',
    validator: (a) => _.isArray(a)
  }),
  NUMBER: new DataType({
    name: 'number',
    validator: (n) => _.isNumber(n)
  }),
  OBJECT: new DataType({
    name: 'object',
    validator: (o) => _.isPlainObject(o)
  }),
  BOOLEAN: new DataType({
    name: 'boolean',
    validator: (b) => _.isBoolean(b)
  })
}

module.exports = {
  DataType,
  Primitives
}
