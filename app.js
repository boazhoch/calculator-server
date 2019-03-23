const express = require("express");
const config = require("./src/config");
const cors = require("cors");

const app = express();
app.use(cors());
require("./src/express/routes")(app);

const port = config.get("PORT");

console.log(`Server listening on port ${port}`);
app.listen(port);
