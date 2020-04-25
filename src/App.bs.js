'use strict';

var React = require("react");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");
var Nav$ReasonreactStarter = require("./components/Nav.bs.js");
var Pages$ReasonreactStarter = require("./pages/Pages.bs.js");

function App(Props) {
  var url = ReasonReactRouter.useUrl(undefined, /* () */0);
  var match = url.path;
  var tmp;
  tmp = match ? (
      match[0] === "signup" && !match[1] ? Pages$ReasonreactStarter.signUp : Pages$ReasonreactStarter.notFound
    ) : Pages$ReasonreactStarter.home;
  return React.createElement("div", undefined, React.createElement(Nav$ReasonreactStarter.make, {
                  items: /* :: */[
                    {
                      url: "/",
                      label: "Home"
                    },
                    /* :: */[
                      {
                        url: "/signup",
                        label: "Sign up"
                      },
                      /* [] */0
                    ]
                  ]
                }), tmp);
}

var make = App;

exports.make = make;
/* react Not a pure module */
