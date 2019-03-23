const nconf = require("nconf");

nconf.argv().env();
nconf.defaults({
  IS_DEV: false,
  PORT: 3003
});

module.exports = nconf;
