const repl = require("repl.js");

module.exports = (extensions, historyFile) => {
  const replServer = repl.start({prompt: "> ", ignoreUndefined: true});

  Object
    .entries(extensions)
    .forEach(([key, extension]) => {
      replServer.context[key] = extension;
    });
  require("repl.history")(replServer, historyFile);

  return replServer;
}