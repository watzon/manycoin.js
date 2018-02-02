const { STRING, ARRAY, NUMBER, OBJECT, BOOLEAN } = require('../types').Primitives

module.exports = {
  abandontransaction: {
    params: {
      txid: {
        type: STRING,
        required: true
      }
    },
    returns: null
  },
  abortrescan: {
    returns: null
  },
  addmultisigaddress: {
    params: {
      nrequired: {
        type: NUMBER,
        required: true
      },
      keys: {
        type: ARRAY,
        required: true
      },
      account: STRING
    },
    returns: STRING
  },
  addnode: {
    params: {
      node: {
        type: STRING,
        required: true
      },
      command: {
        type: STRING,
        required: true
      }
    }
  },
  addwitnessaddress: {
    params: {
      address: {
        type: STRING,
        required: true
      }
    },
    returns: STRING
  },
  backupwallet: {
    params: {
      destination: {
        type: STRING,
        required: true
      }
    },
    returns: null
  },
  bumpfee: {
    params: {
      txid: {
        type: STRING,
        required: true
      },
      options: OBJECT
    },
    returns: OBJECT
  },
  clearbanned: {

  },
  combinerawtransactions: {

  },
  createmultisig: {

  },
  createrawtransaction: {

  },
  decoderawtransaction: {

  },
  decodescript: {

  },
  disconnectnode: {

  },
  dumpprivkey: {
    params: {
      address: {
        type: STRING,
        required: true
      }
    },
    returns: STRING
  },
  dumpwallet: {
    params: {
      filename: {
        type: STRING,
        required: true
      }
    },
    returns: OBJECT
  },
  encryptwallet: {
    params: {
      passphrase: {
        type: STRING,
        required: true
      }
    },
    returns: null
  },
  estimatefee: {

  },
  estimatesmartfee: {

  },
  fundrawtransaction: {

  },
  generate: {

  },
  generatetoaddress: {

  },
  getaccount: {
    params: {
      address: {
        type: STRING,
        default: ''
      }
    },
    returns: OBJECT
  },
  getaccountaddress: {
    params: {
      account: {
        type: STRING,
        default: ''
      }
    },
    returns: STRING
  },
  getaddednodeinfo: {

  },
  getaddressesbyaccount: {
    params: {
      account: {
        type: STRING,
        default: ''
      }
    },
    returns: ARRAY
  },
  getbalance: {
    params: {
      account: {
        type: STRING,
        default: ''
      },
      minconf: {
        type: NUMBER,
        default: 1
      }
    },
    returns: STRING
  },
  getbestblockhash: {
    returns: STRING
  },
  getblock: {
    params: {
      blockhash: {
        type: STRING,
        required: true
      },
      verbosity: NUMBER
    },
    returns: null
  },
  getblockchaininfo: {

  },
  getblockcount: {
    returns: NUMBER
  },
  getblockhash: {
    params: {
      height: {
        type: NUMBER,
        required: true
      }
    },
    returns: STRING
  },
  getblockheader: {
    params: {
      hash: {
        type: STRING,
        required: true
      },
      verbose: BOOLEAN
    },
    returns: OBJECT
  },
  getblocktemplate: {

  },
  getconnectioncount: {
    returns: NUMBER
  },
  getdifficulty: {
    returns: NUMBER
  },
  getgenerate: {
    returns: BOOLEAN
  },
  gethashespersecond: {
    returns: NUMBER
  },
  getinfo: {
    returns: OBJECT
  },
  getmemoryinfo: {

  },
  getmempoolancestors: {

  },
  getmempooldescendants: {

  },
  getmempoolentry: {

  },
  getmempoolinfo: {

  },
  getmininginfo: {

  },
  getnetworkinfo: {

  },
  getpeerinfo: {

  },
  getrawmempool: {

  },
  getnetworkhashps: {
    returns: NUMBER
  },
  getnewaddress: {
    params: {
      account: {
        type: STRING,
        default: ''
      }
    },
    returns: STRING
  },
  getrawtransaction: {

  },
  getreceivedbyaccount: {
    params: {
      account: {
        type: STRING,
        default: ''
      },
      minconf: {
        type: NUMBER,
        default: 1
      }
    },
    returns: NUMBER
  },
  getreceivedbyaddress: {
    params: {
      address: {
        type: STRING,
        required: true
      },
      minconf: {
        type: NUMBER,
        default: 1
      }
    },
    returns: NUMBER
  },
  gettransaction: {
    params: {
      txid: {
        type: STRING,
        required: true
      }
    },
    returns: OBJECT
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
    returns: OBJECT
  },
  help: {
    params: {
      command: STRING
    },
    returns: STRING
  },
  importaddress: {

  },
  importprivkey: {

  },
  importprunedfunds: {

  },
  importpubkey: {

  },
  importwallet: {

  },
  keypoolrefill: {
    returns: null
  },
  listaccounts: {
    params: {
      minconf: {
        type: NUMBER,
        default: 1
      }
    },
    returns: ARRAY
  },
  listaddressgroupings: {

  },
  listbanned: {

  },
  listtlockunspent: {

  },
  listreceivedbyaccount: {
    params: {
      minconf: {
        type: NUMBER,
        default: 1
      },
      includeempty: {
        type: BOOLEAN,
        default: false
      }
    },
    returns: OBJECT
  },
  listreceivedbyaddress: {
    params: {
      minconf: {
        type: NUMBER,
        default: 1
      },
      includeempty: {
        type: BOOLEAN,
        default: false
      }
    },
    returns: OBJECT
  },
  listsinceblock: {

  },
  listtransactions: {
    params: {
      account: {
        type: STRING,
        default: ''
      },
      count: {
        type: NUMBER,
        default: 10
      },
      from: {
        type: NUMBER,
        default: 0
      }
    },
    returns: OBJECT
  },
  listunspent: {

  },
  listwallets: {

  },
  lockunspent: {

  },
  move: {
    params: {
      fromAccount: {
        type: STRING,
        required: true
      },
      toAcount: {
        type: STRING,
        required: true
      },
      amount: {
        type: NUMBER,
        required: true
      },
      minconf: {
        type: NUMBER,
        default: 1
      },
      comment: STRING
    },
    returns: STRING
  },
  ping: {

  },
  preciousblock: {

  },
  prioritizetransaction: {

  },
  removeprunedfunds: {

  },
  sendfrom: {
    params: {
      fromAccount: {
        type: STRING,
        required: true
      },
      toAddress: {
        type: STRING,
        required: true
      },
      amount: {
        type: NUMBER,
        required: true
      },
      minconf: {
        type: NUMBER,
        default: 1
      },
      comment: STRING
    },
    returns: STRING
  },
  sendmany: {
    params: {
      fromAccount: {
        type: STRING,
        required: true
      },
      addressAmount: {
        type: OBJECT,
        required: true
      },
      minconf: {
        type: NUMBER,
        default: 1
      },
      comment: STRING
    },
    returns: ARRAY
  },
  sendrawtransaction: {

  },
  sendtoaddress: {
    params: {
      addres: {
        type: STRING,
        required: true
      },
      amount: {
        type: NUMBER,
        required: true
      },
      comment: STRING,
      commentTo: STRING
    },
    returns: ARRAY
  },
  setaccount: {
    params: {
      address: {
        type: STRING,
        required: true
      },
      account: {
        type: STRING,
        required: true
      }
    },
    returns: null
  },
  setban: {

  },
  setgenerate: {

  },
  setnetworkactive: {

  },
  settxfee: {
    params: {
      amount: {
        type: NUMBER,
        required: true
      }
    },
    returns: null
  },
  signmessage: {

  },
  signmessagewithprivkey: {

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
        type: STRING,
        required: true
      }
    },
    returns: OBJECT
  },
  verifychain: {

  },
  verifymessage: {

  },
  verifytxoutproof: {

  }
}
