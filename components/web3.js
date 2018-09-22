"use strict";

const Web3 = require("web3");
const utils = require("ethereumjs-util");
const contracts = require("./contracts");
const printStatus = require("./ui-helpers/printStatus");
const web3Admin = require("./web3-admin");

const defaultProvider = "http://localhost:8545";

module.exports = (provider) => {
  const web3 = new Web3(new Web3.providers.HttpProvider(provider || defaultProvider));

  web3Admin.extend(web3);

  const {contract, predefinedContracts} = contracts(web3);

  return {
    web3,
    utils,
    contract,
    predefinedContracts,
    status: printStatus(web3)
  };
}