"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("./index.css");
var App_1 = require("./App");
require("@fortawesome/fontawesome-free/css/all.min.css");
require("bootstrap-css-only/css/bootstrap.min.css");
require("mdbreact/dist/css/mdb.css");
var reportWebVitals_1 = require("./reportWebVitals");
react_dom_1["default"].render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(App_1["default"], null)), document.getElementById('root'));
reportWebVitals_1["default"]();
