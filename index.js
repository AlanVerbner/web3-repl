#!/usr/bin/env node

const repl = require("repl");
const Web3 = require("web3");
const utils = require("ethereumjs-util");
const program = require("commander");
const chalk = require("chalk");
const web3Admin = require("./web3Admin");
const os = require("os");

const path = require("path");

const package = require("./package.json");

const defaultProvider = "http://localhost:8545";

const isETCFork = function(web3) {
  const forkBlock = web3.eth.getBlock(1920000);
  if (forkBlock) {
    if (
      forkBlock.hash ===
      "0x94365e3a8c0b35089c1d1195081fe7489b528a84b22199c916180db8b28ade7f"
    )
      return "true";
    else return "false";
  } else {
    return "?";
  }
};

const printHeader = function() {
  console.log(`
██╗    ██╗███████╗██████╗ ██████╗         ██╗███████╗    ██████╗ ███████╗██████╗ ██╗     
██║    ██║██╔════╝██╔══██╗╚════██╗        ██║██╔════╝    ██╔══██╗██╔════╝██╔══██╗██║     
██║ █╗ ██║█████╗  ██████╔╝ █████╔╝        ██║███████╗    ██████╔╝█████╗  ██████╔╝██║     
██║███╗██║██╔══╝  ██╔══██╗ ╚═══██╗   ██   ██║╚════██║    ██╔══██╗██╔══╝  ██╔═══╝ ██║     
╚███╔███╔╝███████╗██████╔╝██████╔╝██╗╚█████╔╝███████║    ██║  ██║███████╗██║     ███████╗
 ╚══╝╚══╝ ╚══════╝╚═════╝ ╚═════╝ ╚═╝ ╚════╝ ╚══════╝    ╚═╝  ╚═╝╚══════╝╚═╝     ╚══════╝
`);
};

const printStatus = web3 => () => {
  try {
    const lastBlockNumber = web3.eth.blockNumber;
    const lastBlock = web3.eth.getBlock(lastBlockNumber);
    console.log(`
  ${chalk.green("Provider         : " + web3.currentProvider.host)}
  ${chalk.green("Last Block #     : " + lastBlockNumber)}
  ${chalk.green("Last Block       : " + (!lastBlock ? "N/A" : lastBlock.hash))}
  ${chalk.green("Mining?          : " + web3.eth.mining)}
  ${chalk.green("Peer Count       : " + web3.net.peerCount)}
  ${chalk.green("Web3 api version : " + web3.version.api)}
  ${chalk.green("ETC fork?        : " + isETCFork(web3))}
  ${chalk.green("Coinbase         : " + web3.eth.coinbase)}
  `);
  } catch (err) {
    console.error(chalk.red(err));
  }
};

program
  .version(package.version)
  .option("-p, --provider [url]", "Web3JS RPC provider")
  .option("-s, --skip-status", "Does not show status after bootstrap")
  .option(
    "-hf, --history-file [path]",
    "File path of commands history file (defaults to $HOME/.web3_repl_history)"
  )
  .parse(process.argv);

printHeader();

const web3 = new Web3(
  new Web3.providers.HttpProvider(program.provider || defaultProvider)
);
if (!program.skipStatus) printStatus(web3)();

var replServer = repl.start({
  prompt: "> ",
  ignoreUndefined: true
});

const historyFile = program.historyFile
  ? program.historyFile
  : path.join(os.homedir(), ".web3_repl_history");

require("repl.history")(replServer, historyFile);

web3Admin.extend(web3);

replServer.context.web3 = web3;
replServer.context.utils = utils;
replServer.context.status = printStatus(web3);
