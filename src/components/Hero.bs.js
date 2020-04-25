'use strict';

var Css = require("bs-css-emotion/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

var container = Curry._1(Css.style, /* :: */[
      Css.backgroundColor(Css.hex("f3f3f3")),
      /* :: */[
        Css.padding(Css.px(24)),
        /* [] */0
      ]
    ]);

var Styles = {
  container: container
};

function Hero(Props) {
  var children = Props.children;
  return React.createElement("div", {
              className: container
            }, children);
}

var make = Hero;

exports.Styles = Styles;
exports.make = make;
/* container Not a pure module */
