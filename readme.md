# WEB3-REPL

This REPL allows to connect to a running ETC/ETH node via HTTP RPC. It's a simple NodeJs REPL wrapper with web3.js included.

## Features:

- [web3 API](https://www.npmjs.com/package/web3)
- Geth [management methods](https://github.com/ethereum/go-ethereum/wiki/Management-APIs)
- `status()` function is exposed in global as helper in order to get useful information about the server node
- [ethereumjs-util](https://github.com/ethereumjs/ethereumjs-util/blob/master/docs/index.md) exported as `util`
- Contract ABI parsing exposed using [truffle-contract](http://truffleframework.com/) exported as `contract`
- ERC20 and ERC721 ABI preloaded as `predefinedContracts.Erc20` and `predefinedContracts.Erc721`
- NodeJs Repl history saved to a file

![sample](https://cloud.githubusercontent.com/assets/3750504/22864705/33afed3e-f135-11e6-9c53-33e879abdc06.gif)

## How to install

`yarn global add web3-repl` (or `npm install --global web3-repl`)

## Usage

```
  Usage: web3-repl [options]

  Options:

    -h, --help            output usage information
    -V, --version         output the version number
    -p, --provider [url]  Web3JS RPC provider
    -s, --skip-status     Does not show status after bootstrap
    -hf, --history-file [path]  File path of commands history file (defaults to $HOME/.web3_repl_history)
```

## Contracts

### Truffle-Contract

[truffle-contract](https://www.npmjs.com/package/truffle-contract) is exposed so all the functionalities exposed by that library can be used. For more info refer to `truffle-contract` site

### ERC20 and ERC721

ERC20 and ERC721 contracts are preloaded and ready to use, for example:

```javascript
$ web3-repl -p http://eth-mainnet:8545
> const BAT = predefinedContracts.Erc20.at("0x0d8775f648430679a709e98d2b0cb6250d2887ef")
> BAT.totalSupply()
BigNumber { s: 1, e: 27, c: [ 15000000000000 ] }
```

## TODO

- [ ] Expose Parity admin methods
- [ ] Expose Mantis custom methods
- [ ] (Investigate) Web3@1.0.0 upgrade
