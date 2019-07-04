#!/usr/bin/env node

const program = require("commander");
const chalk = require("chalk");
const os = require("os");
const path = require("path");

require("./commands");
return;

//printHeader();
//const repl = require("./components/repl");


if (!program.skipStatus) 
  printStatus(web3)();

const historyFile = program.historyFile
  ? program.historyFile
  : path.join(os.homedir(), ".web3_repl_history");

web3Admin.extend(web3);

const {contract, predefinedContracts} = contracts(web3);

const {instarun} = repl({
  web3,
  utils,
  contract,
  predefinedContracts,
  status: printStatus(web3)
}, historyFile);

instarun({eval: "web3.eth.blockNumber", print: true, quit: true});