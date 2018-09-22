const repl = require("repl.js");
const instarun = require('repl.js/src/evaler/instarun');
const Console = require('repl.js/src/utilrepl/console');

module.exports = (extensions, historyFile) => {
  const replServer = repl.start({prompt: "> ", ignoreUndefined: true});

  Object
    .entries(extensions)
    .forEach(([key, extension]) => {
      replServer.context[key] = extension;
    });

  if (historyFile) 
    require("repl.history")(replServer, historyFile);
 
  return {
    replServer,
    instarun: (opts) => instarun(replServer, Console.Console({}), opts)
  };
}