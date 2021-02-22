"use strict";

var server = require("./graphql/schema");

var cors = require("cors");

var express = require('express');

var app = express();
server.applyMiddleware({
  app: app
});
var PORT = process.env.PORT || 4000;
app.use(cors());
app.listen(PORT, function () {
  console.log("The server has started on port: ".concat(PORT));
});