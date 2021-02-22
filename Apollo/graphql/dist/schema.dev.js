"use strict";

var _require = require('apollo-server-express'),
    ApolloServer = _require.ApolloServer;

var TYPEDEFS = require('./types.js');

var RESOLVERS = require('./resolvers.js');

var server = new ApolloServer({
  typeDefs: TYPEDEFS,
  resolvers: RESOLVERS,
  playground: {
    endpoint: "http://localhost:4000/graphql",
    settings: {
      'editor.theme': 'light'
    }
  }
});
module.exports = server;