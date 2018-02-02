const { STRING, ARRAY, NUMBER, OBJECT, BOOLEAN } = require('../types').Primitives

module.exports = {
  backupwallet: {
    params: {
      destination: {
        type: STRING,
        required: true
      }
    },
    returns: null
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
  getblockcount: {
    returns: NUMBER
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
  getwork: {
    params: {
      data: OBJECT
    },
    returns: [OBJECT, BOOLEAN]
  },
  help: {
    params: {
      command: STRING
    },
    returns: STRING
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
    params: {
      type: BOOLEAN,
      genproclimit: NUMBER
    },
    returns: null
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
  stop: {
    returns: null
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
  walletlock: {
    returns: null
  },
  walletpassphrase: {
    params: {
      passphrase: {
        type: STRING,
        required: true
      },
      timeout: {
        type: NUMBER,
        required: true
      }
    }
  },
  walletpassphrasechange: {
    params: {
      oldpassphrase: {
        type: STRING,
        required: true
      },
      newpassphrase: {
        type: STRING,
        required: true
      }
    },
    returns: null
  }
}
