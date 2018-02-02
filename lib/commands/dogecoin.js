const { STRING, ARRAY, NUMBER, OBJECT, BOOLEAN } = require('../types').Primitives

module.exports = {
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
  estimatepriority: {

  },
  generate: {

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
  getinfo: {
    returns: OBJECT
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
  getrawchangedbyaddress: {

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
  prioritizetransaction: {

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
  setgenerate: {

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
