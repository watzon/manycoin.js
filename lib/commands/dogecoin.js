module.exports = {
    addmultisigaddress: {
        params: {
            nrequired: {
                type: Number,
                required: true
            },
            keys: {
                type: Array,
                required: true
            },
            account: String
        },
        returns: String
    },
    addnode: {

    },
    backupwallet: {
        params: {
            destination: {
                type: String,
                required: true
            }
        },
        returns: null
    },
    createmultisig: {

    },
    createrawtransaction: {

    },
    decoderawtransaction: {

    },
    decodescript: {

    },
    dumpprivkey: {
        params: {
            address: {
                type: String,
                required: true
            }
        },
        returns: String
    },
    dumpwallet: {
        params: {
            filename: {
                type: String,
                required: true
            }
        },
        returns: Object
    },
    encryptwallet: {
        params: {
            passphrase: {
                type: String,
                required: true
            }
        },
        returns: null
    },
    estimatefee: {

    },
    estimatepriority: {

    },
    generate: {

    },
    getaccount: {
        params: {
            address: {
                type: String,
                default: ''
            }
        },
        returns: Object
    },
    getaccountaddress: {
        params: {
            account: {
                type: String,
                default: ''
            }
        },
        returns: String
    },
    getaddednodeinfo: {

    },
    getbalance: {
        params: {
            account: {
                type: String,
                default: ''
            },
            minconf: {
                type: Number,
                default: 1
            }
        },
        returns: String
    },
    getbestblockhash: {
        returns: String
    },
    getblock: {
        params: {
            blockhash: {
                type: String,
                required: true
            },
            verbosity: Number
        },
        returns: null
    },
    getblockchaininfo: {

    },
    getblockcount: {
        returns: Number
    },
    getblockhash: {
        params: {
            height: {
                type: Number,
                required: true
            }
        },
        returns: String
    },
    getblocktemplate: {

    },
    getconnectioncount: {
        returns: Number
    },
    getdifficulty: {
        returns: Number
    },
    getgenerate: {
        returns: Boolean
    },
    getinfo: {
        returns: Object
    },
    getmempoolinfo: {
        
    },
    getmininginfo: {

    },
    getnettotals: {

    },
    getnetworkinfo: {

    },
    getpeerinfo: {

    },
    getnetworkhashps: {
        returns: Number
    },
    getnewaddress: {
        params: {
            account: {
                type: String,
                default: ''
            }
        },
        returns: String
    },
    getrawchangedbyaddress: {

    },
    getrawtransaction: {

    },
    getreceivedbyaccount: {
        params: {
            account: {
                type: String,
                default: ''
            },
            minconf: {
                type: Number,
                default: 1
            }
        },
        returns: Number
    },
    getreceivedbyaddress: {
        params: {
            address: {
                type: String,
                required: true
            },
            minconf: {
                type: Number,
                default: 1
            }
        },
        returns: Number
    },
    gettransaction: {
        params: {
            txid: {
                type: String,
                required: true
            }
        },
        returns: Object
    },
    gettxout: {

    },
    gettxoutproof: {

    },
    gettxoutsetinfo: {

    },
    getunconfirmedbalance: {

    },
    getwalletinfo: {
        returns: Object
    },
    help: {
        params: {
            command: String
        },
        returns: String
    },
    importaddress: {

    },
    importprivkey: {

    },
    importwallet: {

    },
    keypoolrefill: {
        returns: null
    },
    listaccounts: {
        params: {
            minconf: {
                type: Number,
                default: 1
            }
        },
        returns: Array
    },
    listaddressgroupings: {

    },
    listtlockunspent: {

    },
    listreceivedbyaccount: {
        params: {
            minconf: {
                type: Number,
                default: 1
            },
            includeempty: {
                type: Boolean,
                default: false
            }
        },
        returns: Object
    },
    listreceivedbyaddress: {
        params: {
            minconf: {
                type: Number,
                default: 1
            },
            includeempty: {
                type: Boolean,
                default: false
            }
        },
        returns: Object
    },
    listsinceblock: {

    },
    listtransactions: {
        params: {
            account: {
                type: String,
                default: ''
            },
            count: {
                type: Number,
                default: 10
            },
            from: {
                type: Number,
                default: 0
            }
        },
        returns: Object
    },
    listunspent: {

    },
    lockunspent: {

    },
    move: {
        params: {
            fromAccount: {
                type: String,
                required: true
            },
            toAcount: {
                type: String,
                required: true
            },
            amount: {
                type: Number,
                required: true
            },
            minconf: {
                type: Number,
                default: 1
            },
            comment: String
        },
        returns: String
    },
    ping: {

    },
    prioritizetransaction: {

    },
    sendfrom: {
        params: {
            fromAccount: {
                type: String,
                required: true
            },
            toAddress: {
                type: String,
                required: true
            },
            amount: {
                type: Number,
                required: true
            },
            minconf: {
                type: Number,
                default: 1
            },
            comment: String
        },
        returns: String
    },
    sendmany: {
        params: {
            fromAccount: {
                type: String,
                required: true
            },
            addressAmount: {
                type: Object,
                required: true
            },
            minconf: {
                type: Number,
                default: 1
            },
            comment: String
        },
        returns: Array
    },
    sendrawtransaction: {

    },
    sendtoaddress: {
        params: {
            addres: {
                type: String,
                required: true
            },
            amount: {
                type: Number,
                required: true
            },
            comment: String,
            commentTo: String
        },
        returns: Array
    },
    setaccount: {
        params: {
            address: {
                type: String,
                required: true
            },
            account: {
                type: String,
                required: true
            }
        },
        returns: null
    },
    setgenerate: {

    },
    settxfee: {
        params: {
            amount: {
                type: Number,
                required: true
            }
        },
        returns: null
    },
    signmessage: {

    },
    signrawtransaction: {

    },
    submitblock: {

    },
    stop: {
        returns: null
    },
    uptime: {

    },
    validateaddress: {
        params: {
            address: {
                type: String,
                required: true
            }
        },
        returns: Object
    },
    verifychain: {

    },
    verifymessage: {

    },
    verifytxoutproof: {

    }
}