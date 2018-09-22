#!/usr/bin/env node

const Web3 = require("web3");
const utils = require("ethereumjs-util");
const program = require("commander");
const chalk = require("chalk");
const os = require("os");
const path = require("path");

const repl = require("./repl");
const contracts = require("./contracts");

const printStatus = require("./helpers/printStatus");
const printHeader = require("./helpers/printHeader");
const web3Admin = require("./web3Admin");

const package = require("./package.json");

const defaultProvider = "http://localhost:8545";

program
  .version(package.version)
  .option("-p, --provider [url]", "Web3JS RPC provider")
  .option("-s, --skip-status", "Does not show status after bootstrap")
  .option("-hf, --history-file [path]", "File path of commands history file (defaults to $HOME/.web3_repl_history)")
  .parse(process.argv);

printHeader();

const web3 = new Web3(new Web3.providers.HttpProvider(program.provider || defaultProvider));
if (!program.skipStatus) 
  printStatus(web3)();

const historyFile = program.historyFile
  ? program.historyFile
  : path.join(os.homedir(), ".web3_repl_history");

web3Admin.extend(web3);

const {contract, predefinedContracts} = contracts(web3);

repl({
  web3,
  utils,
  contract,
  predefinedContracts,
  status: printStatus(web3)
}, historyFile);
