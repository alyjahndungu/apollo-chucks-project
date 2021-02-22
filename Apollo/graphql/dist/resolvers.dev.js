"use strict";

var axios = require('axios');

var RESOLVERS = {
  Query: {
    random_joke: function random_joke(parent, args) {
      return axios.get("https://api.chucknorris.io/jokes/random").then(function (response) {
        return response.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    categories: function categories(parent, args) {
      return axios.get("https://api.chucknorris.io/jokes/categories").then(function (response) {
        return response.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    jokes: function jokes(parent, args) {
      console.log(args);
      console.log(parent);
      return axios.get("https://api.chucknorris.io/jokes/random?category=".concat(args.category)).then(function (response) {
        return response.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }
};
module.exports = RESOLVERS;