'use strict';

var React = require("react");
var Hero$ReasonreactStarter = require("../components/Hero.bs.js");

function Home(Props) {
  return React.createElement(Hero$ReasonreactStarter.make, {
              children: React.createElement("h1", undefined, "ReasonReact Starter")
            });
}

var make = Home;

exports.make = make;
/* react Not a pure module */
