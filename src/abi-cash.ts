export const abiCash = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "name_",
                "type": "string"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "hashlockPaid",
                "type": "bytes32"
            },
            {
                "components": [
                    {
                        "components": [
                            {
                                "internalType": "contract ISoCashAccount",
                                "name": "account",
                                "type": "address"
                            },
                            {
                                "internalType": "BIC",
                                "name": "bic",
                                "type": "bytes11"
                            },
                            {
                                "internalType": "IBAN",
                                "name": "iban",
                                "type": "bytes32"
                            }
                        ],
                        "internalType": "struct RecipentInfo",
                        "name": "recipient",
                        "type": "tuple"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "deadline",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "hashlockPaid",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "hashlockCancel",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "string",
                        "name": "opaque",
                        "type": "string"
                    },
                    {
                        "internalType": "enum IHTLCPayment.HTLCState",
                        "name": "state",
                        "type": "uint8"
                    }
                ],
                "indexed": false,
                "internalType": "struct IHTLCPayment.HTLC",
                "name": "htlc",
                "type": "tuple"
            }
        ],
        "name": "HTLCPaymentCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "usingSecret",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "opaque",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "cancelled",
                "type": "bool"
            }
        ],
        "name": "HTLCPaymentRemoved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "status",
                "type": "bool"
            }
        ],
        "name": "Whitelisted",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "accountNumber",
        "outputs": [
            {
                "internalType": "AccountNumber",
                "name": "",
                "type": "uint32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "balance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "bank",
        "outputs": [
            {
                "internalType": "contract ISoCashBank",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "oldSender",
                "type": "address"
            }
        ],
        "name": "blacklist",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "fullBalance",
        "outputs": [
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_name",
                "type": "bytes32"
            }
        ],
        "name": "getAttributeNum",
        "outputs": [
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_name",
                "type": "bytes32"
            }
        ],
        "name": "getAttributeStr",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            }
        ],
        "name": "getHTLCPayment",
        "outputs": [
            {
                "components": [
                    {
                        "components": [
                            {
                                "internalType": "contract ISoCashAccount",
                                "name": "account",
                                "type": "address"
                            },
                            {
                                "internalType": "BIC",
                                "name": "bic",
                                "type": "bytes11"
                            },
                            {
                                "internalType": "IBAN",
                                "name": "iban",
                                "type": "bytes32"
                            }
                        ],
                        "internalType": "struct RecipentInfo",
                        "name": "recipient",
                        "type": "tuple"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "deadline",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "hashlockPaid",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "hashlockCancel",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "string",
                        "name": "opaque",
                        "type": "string"
                    },
                    {
                        "internalType": "enum IHTLCPayment.HTLCState",
                        "name": "state",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct IHTLCPayment.HTLC",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "iban",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "a",
                "type": "address"
            }
        ],
        "name": "isWhitelisted",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "contract ISoCashAccount",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "BIC",
                        "name": "bic",
                        "type": "bytes11"
                    },
                    {
                        "internalType": "IBAN",
                        "name": "iban",
                        "type": "bytes32"
                    }
                ],
                "internalType": "struct RecipentInfo",
                "name": "recipient",
                "type": "tuple"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            },
            {
                "internalType": "bytes32",
                "name": "hashlockPaid",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "hashlockCancel",
                "type": "bytes32"
            },
            {
                "internalType": "string",
                "name": "opaque",
                "type": "string"
            }
        ],
        "name": "lockFunds",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "key",
                "type": "bytes32"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "lockedBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_name",
                "type": "bytes32"
            },
            {
                "internalType": "int256",
                "name": "value",
                "type": "int256"
            }
        ],
        "name": "setAttributeNum",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_name",
                "type": "bytes32"
            },
            {
                "internalType": "string",
                "name": "value",
                "type": "string"
            }
        ],
        "name": "setAttributeStr",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "contract ISoCashAccount",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "BIC",
                        "name": "bic",
                        "type": "bytes11"
                    },
                    {
                        "internalType": "IBAN",
                        "name": "iban",
                        "type": "bytes32"
                    }
                ],
                "internalType": "struct RecipentInfo",
                "name": "recipient",
                "type": "tuple"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "details",
                "type": "string"
            }
        ],
        "name": "transferEx",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "key",
                "type": "bytes32"
            },
            {
                "components": [
                    {
                        "internalType": "contract ISoCashAccount",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "BIC",
                        "name": "bic",
                        "type": "bytes11"
                    },
                    {
                        "internalType": "IBAN",
                        "name": "iban",
                        "type": "bytes32"
                    }
                ],
                "internalType": "struct RecipentInfo",
                "name": "recipient",
                "type": "tuple"
            },
            {
                "internalType": "string",
                "name": "secret",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "details",
                "type": "string"
            }
        ],
        "name": "transferLockedFunds",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "key",
                "type": "bytes32"
            },
            {
                "internalType": "string",
                "name": "secret",
                "type": "string"
            }
        ],
        "name": "unlockFunds",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "unlockedBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            },
            {
                "internalType": "string",
                "name": "secret",
                "type": "string"
            }
        ],
        "name": "verifyHTLC",
        "outputs": [
            {
                "internalType": "bool",
                "name": "ok",
                "type": "bool"
            },
            {
                "internalType": "string",
                "name": "reason",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            },
            {
                "internalType": "string",
                "name": "secret",
                "type": "string"
            }
        ],
        "name": "verifyHTLCCancel",
        "outputs": [
            {
                "internalType": "bool",
                "name": "ok",
                "type": "bool"
            },
            {
                "internalType": "string",
                "name": "reason",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newSender",
                "type": "address"
            }
        ],
        "name": "whitelist",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
] as const
