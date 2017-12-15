# WEB3-REPL

This REPL allows to connect to a running ETC/ETH node via HTTP RPC. It's a simple NodeJs REPL wrapper with web3.js included.

## Features:

- [web3 API](https://www.npmjs.com/package/web3)
- Geth [management methods](https://github.com/ethereum/go-ethereum/wiki/Management-APIs)
- `status()` function is exposed in global as helper in order to get useful information about the server node
- [ethereumjs-util](https://github.com/ethereumjs/ethereumjs-util/blob/master/docs/index.md) exported as `util`
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

## TODO

- [ ] Expose Parity admin methods
- [ ] Expose Mantis custom methods
- [ ] (Investigate) Web3@1.0.0 upgrade