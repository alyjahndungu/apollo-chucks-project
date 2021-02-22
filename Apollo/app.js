// const express = require('express');
// const bodyParser = require('body-parser');
// const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
// const { makeExecutableSchema } = require('graphql-tools');


// // Put together a schema
// const schema = makeExecutableSchema({
//   typeDefs,
//   resolvers,
// });

// // Initialize the app
// const app = express();

// // The GraphQL endpoint
// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// // GraphiQL, a visual editor for queries
// app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// // Start the server
// app.listen(5000, () => {
//   console.log('Go to http://localhost:5000/graphiql to run queries!');
// });

// import server from "./graphql/schema";
// import cors from "cors";
const server = require("./graphql/schema")
const cors = require("cors")
const express = require('express');
const app = express();

server.applyMiddleware({ app });

// Express: Port
const PORT = process.env.PORT || 4000;

app.use(cors());
// Express: Listener
app.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
});

