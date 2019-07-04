const isETCFork = function (web3) {
  const forkBlock = web3
    .eth
    .getBlock(1920000);
  if (forkBlock) {
    if (forkBlock.hash === "0x94365e3a8c0b35089c1d1195081fe7489b528a84b22199c916180db8b28ade7f") 
      return "true";
    else 
      return "false";
    }
  else {
    return "?";
  }
};

module.exports = {
  isETCFork
}
