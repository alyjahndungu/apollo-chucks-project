const {ApolloServer} = require('apollo-server-express')
const TYPEDEFS = require('./types.js')
const RESOLVERS = require('./resolvers.js')

const server = new ApolloServer(
    {
        typeDefs: TYPEDEFS,
        resolvers: RESOLVERS,
        playground: {
          endpoint: `http://localhost:4000/graphql`,
          settings: {
            'editor.theme': 'light'
          }
        }
      }
);

module.exports = server

