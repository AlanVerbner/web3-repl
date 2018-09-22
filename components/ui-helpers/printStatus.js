'use strict';

const chalk = require("chalk");
const { isETCFork } = require("../network");

const printStatus = web3 => () => {
  try {
    const lastBlockNumber = web3.eth.blockNumber;
    const lastBlock = web3
      .eth
      .getBlock(lastBlockNumber);
    console.log(`
  ${chalk.green("Provider         : " + web3.currentProvider.host)}
  ${chalk.green("Last Block #     : " + lastBlockNumber)}
  ${chalk.green("Last Block       : " + (!lastBlock
      ? "N/A"
      : lastBlock.hash))}
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

module.exports = printStatus;