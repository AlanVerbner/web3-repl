"use strict";

const program = require("commander");
const {version} = require("../package.json");

program
  .version(version)
//  .option("-s, --skip-status", "Does not show status after bootstrap")
//  .option("-hf, --history-file [path]", "File path of commands history file (defaults to $HOME/.web3_repl_history)")
  .command("repl", "Starts REPL mode", {isDefault: true}).alias("r")
  .command("eval [expression]", "Executes a single command and quits").alias('e')
  .parse(process.argv);
