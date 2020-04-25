'use strict';

var Css = require("bs-css-emotion/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var App$ReasonreactStarter = require("./App.bs.js");

Curry._2(Css.$$global, "body", /* :: */[
      Css.fontFamily(/* `custom */[
            1066567601,
            "sans-serif"
          ]),
      /* [] */0
    ]);

var Styles = { };

ReactDOMRe.renderToElementWithId(React.createElement(App$ReasonreactStarter.make, { }), "app");

exports.Styles = Styles;
/*  Not a pure module */
