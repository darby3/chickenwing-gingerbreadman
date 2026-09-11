var liveServer = require("live-server");

var params = {
  root: "./public/", // Set root directory that's being served. Defaults to cwd.
  open: false, // When false, it won't load your browser by default.
  logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
};

liveServer.start(params);
