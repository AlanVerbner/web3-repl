const contract = require("truffle-contract");

const erc20Abi = require("./contracts/erc20-abi.json");

const erc721 = {};

module.exports = (web3) => {

  const Erc20 = contract({abi: erc20Abi});
  Erc20.setProvider(web3.currentProvider);

  return {
    contract,
    predefinedContracts: {
      Erc20: Erc20,
      erc721
    }
  }
}