const _ = require('lodash')

class Command {

    constructor (name, { params = {}, returns = null } = {}, client) {
        this.name = name
        this.returns = returns
        this._client = client
        this.params = {}

        Object.keys(params).forEach(k => {
            this.params[k] = new Param(k, params[k])
        })
    }

    get requiredParams () {
        return Object.keys(this.params).filter(p => {
            return this.params[p].required
        })
    }

    get optionalParams () {
        return Object.keys(this.params).filter(p => !this.params[p].required)
    }

    get numParams () {
        return Object.keys(this.params).length
    }

    call (params, named = false) {
        return new Promise((resolve, reject) => {
            let pcount = this._countParams(params)
            if (pcount > this.numParams)
                return reject(`The command ${this.name} only accepts ${this.numParams} params. You gave ${pcount}`)
            
            if (named && _.isArray(params))
                return reject(`An Array cannot be used for calls marked as 'named'. Please use an Object.`)

            this._validate(params)
                .catch(err => {
                    return reject(err)
                })

            // Turn an object into an array if named is false
            if (!named && !_.isArray(params))
                params = Object.keys(params).map(k => params[k])

            this._client.callRaw(this.name, params)
                .then(res => resolve(res))
                .catch(err => reject(err))
        })
    }

    _namedToPositional (paramObj) {
        return Object.keys(paramObj).map(k => paramObj[k])
    }

    _validate (params) {
        return new Promise((resolve, reject) => {
            const required = this.requiredParams

            if (_.isArray(params)) {
                if (params.length < required.length) {
                    const missing = required.slice(params.length).join(', ')
                    return reject(`Required positional param(s) (${missing}) missing.`)
                }

                // TODO: Add type checking
                return resolve()
            } 
            const all = Object.keys(this.params)

            const missing = required.filter(p => {
                return _.isNil(params[p])
            })

            if (missing.length > 0) {
                const missing = required.slice(all.length).join(', ')
                return reject(`Required param(s) (${missing}) are missing.`)
            }

            // TODO: Add type checking
            const wrongType = []

            return resolve()
        })
    }

    _countParams(params) {
        if (_.isArray(params)) {
            return params.length
        } else {
            return Object.keys(params).length
        }
    }
}

class Param {

    constructor (name, options) {
        this.name = name
        if (_.isFunction(options) && _.isNative(options)) {
            this.type = options
            this.required = false
            this.default = null
        } else {
            if (!options.type)
                throw `The 'type' parameter is required for '${name}'`

            this.type = options.type
            this.required = options.required || false
            this.default = options.default || null
        }
    }

}

module.exports = Command