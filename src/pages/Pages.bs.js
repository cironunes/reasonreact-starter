'use strict';

var React = require("react");
var Home$ReasonreactStarter = require("./Home.bs.js");
var SignUp$ReasonreactStarter = require("./SignUp.bs.js");
var NotFound$ReasonreactStarter = require("./NotFound.bs.js");

var notFound = React.createElement(NotFound$ReasonreactStarter.make, { });

var home = React.createElement(Home$ReasonreactStarter.make, { });

var signUp = React.createElement(SignUp$ReasonreactStarter.make, { });

exports.notFound = notFound;
exports.home = home;
exports.signUp = signUp;
/* notFound Not a pure module */
