'use strict';

var Css = require("bs-css-emotion/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Hero$ReasonreactStarter = require("../components/Hero.bs.js");

var label = Curry._1(Css.style, /* :: */[
      Css.display(Css.block),
      /* [] */0
    ]);

var Styles = {
  label: label
};

function SignUp(Props) {
  return React.createElement(Hero$ReasonreactStarter.make, {
              children: null
            }, React.createElement("h1", undefined, "Sign Up"), React.createElement("form", undefined, React.createElement("div", undefined, React.createElement("label", {
                          className: label
                        }, "Name"), React.createElement("input", {
                          type: "text"
                        })), React.createElement("div", undefined, React.createElement("label", {
                          className: label
                        }, "Email"), React.createElement("input", {
                          type: "text"
                        })), React.createElement("button", undefined, "Sign Up")));
}

var make = SignUp;

exports.Styles = Styles;
exports.make = make;
/* label Not a pure module */
