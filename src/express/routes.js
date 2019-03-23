const calcCtrl = require("../calc");

module.exports = app => {
  app.get("/sum", calcCtrl.sum);
};
