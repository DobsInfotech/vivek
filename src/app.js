const express = require("express");

const app = express();
require("./db/conn");
const router = require("../src/router/router");

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

require("dotenv").config();
var port = process.env.PORT || 4000;

app.use("/", router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
