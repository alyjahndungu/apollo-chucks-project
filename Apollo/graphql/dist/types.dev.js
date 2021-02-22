"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\ntype Query {\n    random_joke: Joke\n    categories:[String]\n    jokes(category:String!):Joke\n  }\ntype Joke {\n    categories:[String]\n    created_at: String!\n    id:ID!\n    updated_at:String!\n    url:String\n    icon_url:String     \n    value: String!\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var gql = require('graphql-tag');

var TYPEDEFS = gql(_templateObject());
module.exports = TYPEDEFS;