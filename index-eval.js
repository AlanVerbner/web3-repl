"use strict";

const program = require("commander");
const fs = require("fs");
const web3 = require("./components/web3");
const repl = require("./components/repl");
const printHeader = require("./components/ui-helpers/printHeader");

function runEval(expression, options) {}

program
  .option("-T, --pipe", "Does not print any status information and quit")
  .option("-p, --provider [url]", "Web3JS RPC provider")
  .parse(process.argv);

if (!program.args || program.args.length !== 1) {
  console.error('Expression required!');
  process.exit(1);
}

if (!program.pipe) 
  printHeader(web3);

const toEval = program.args[0];

const opts = fs.existsSync(toEval)
  ? { file: toEval, print: true, quit: program.pipe }
  : { eval: toEval, print: true, quit: program.pipe };

const components = web3(program.provider);
const {replServer, instarun} = repl(components);
instarun(opts);