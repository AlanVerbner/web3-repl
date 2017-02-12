# WEB3-REPL

This REPL allows to connect to a running ETC/ETH node via RPC. It's a simple NodeJs REPL wrapper with web3.js included.

Also, `status()` is exposed as helper in order to get useful information about the server node.

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
```
