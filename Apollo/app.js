
const server = require("./graphql/schema")
const cors = require("cors")
const express = require('express');
const app = express();

server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

app.use(cors());

app.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
});

